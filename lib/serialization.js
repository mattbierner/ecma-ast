/**
 * @fileOverview Node serialization
 */
define(['exports',
        'ecma_ast/node'],
function(exports,
        ecma_node){
//"use strict";

var keys = Object.keys;
    
var map = Function.prototype.call.bind(Array.prototype.map);
var reduce = Function.prototype.call.bind(Array.prototype.reduce);

var id = function(x) { return x; };

/* Internal
 ******************************************************************************/
var typeMap = {};

var registerNode = function(type, ctor) {
    typeMap[type] = ctor;
};

/* Serialization
 ******************************************************************************/
/**
 * Serialize a given node to a JSON data structure.
 * 
 * @param node Root node to serialize.
 * @param [locSerializer] Function that serializes location data.
 * @param [udSerializer] Function that serializes user data objects.
 */
var serialize = (function(){
    var _serialize = function(node, locSerializer, udSerializer) {
        if (!node)
            return node;
        
        if (Array.isArray(node))
            return map(node, function(x) { return _serialize(x, locSerializer, udSerializer); });
        
        if (!(node instanceof ecma_node.Node))
            return node;
        
        return {
            'type': node.type,
            'loc': locSerializer(node.loc),
            'ud': udSerializer(node.ud),
            'children': reduce(node.children, function(o, childKey) {
                o[childKey] = _serialize(node[childKey], locSerializer, udSerializer);
                return o;
            }, {}),
            'attributes': reduce(node.attributes, function(o, key) {
                o[key] = node[key];
                return o;
            }, {})
        }
    };
    
    return function(node, locSerializer, udSerializer) {
        var program = _serialize(
            node,
            locSerializer || id,
            udSerializer || id);
        return {
            'version': '2.1.0',
            'kind': 'ecma',
            'program': program
        };
    };
}());

/**
 * Unserialize a data to an AST.
 * 
 * @param data Object to unserialize.
 * @param [locSerializer] Function that unserializes location data.
 * @param [udSerializer] Function that unserializes user data objects.
 */
var unserialize = (function(){
    var _unserialize = function(data, locUnserializer, udUnserializer) {
        if (!data)
            return data;
        
        if (Array.isArray(data))
            return map(data, function(x) { return _unserialize(x, locUnserializer, udUnserializer); });
        
        var ctor = typeMap[data.type];
        if (!ctor)
            return data;
        
        var loc = locUnserializer(data.loc),
            ud = udUnserializer(data.ud);
        
        var children = reduce(
            keys(data.children),
            function(o, c) {
                o[c] = _unserialize(data.children[c], locUnserializer, udUnserializer);
                return o;
            }, {});
        
        var attributes = reduce(
            keys(data.attributes),
            function(o, c) {
                o[c] = data.attributes[c];
                return o;
            }, {});
        
        return ecma_node.construct(
            ctor.prototype,
            loc,
            ud,
            children,
            attributes);
    };
    
    return function(data, locSerializer, udSerializer) {
        return _unserialize(
            data.program,
            locSerializer || id,
            udSerializer || id);
    };
}());


/* Export
 ******************************************************************************/
// Internal
exports.registerNode = registerNode;

// Public
exports.serialize = serialize;
exports.unserialize = unserialize;
});