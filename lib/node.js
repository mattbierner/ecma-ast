/**
 * @fileOverview Node serialization
 */
define(['require', 'exports'],
function(require, exports){
//"use strict";

var concatArgs = (function(){
    var map = function(x) { return x; };
    
    return function(arr, args) {
        return arr.concat([].map.call(args, map));
    };
}());

/* Node
 ******************************************************************************/
/**
 * Base class for nodes
 * 
 * @param loc Location.
 * @param ud UserData
 */
var Node = function(loc, ud) {
    this.loc = loc;
    this.ud = (ud || null)
};

Node.prototype.toString = function() {
    return "{" + this.type + "}";
};

var construct = function(x, children) {
    var properties = {};
    
    // Copy explicit children
    Object.keys(children).forEach(function(key) {
        properties[key] = {
            'value': children[key],
            'enumerable': true,
            'configurable': true
        };
    });
    
    // Null remaining children
    x.children.forEach(function(key) {
        properties[key] = (properties[key] || {
            'value': null,
            'enumerable': true,
            'configurable': true
        });
    });
    
    // Shallow copy other props
    properties.loc = {
        'value': x.loc,
        'enumerable': false
    };
    properties.ud = {
        'value': x.ud,
        'enumerable': false
    };
    
    return Object.create(
        Object.getPrototypeOf(x),
        properties);
};

var setAttributes = function(node, attributes) {
    var properties = {};
    
    // Copy children
    node.children.forEach(function(key) {
        properties[key] ={
            'value': node[key],
            'enumerable': true,
            'configurable': true
        };
    });
    
    Object.keys(attributes).forEach(function(key) {
        properties[key] = {
            'value': attributes[key],
            'enumerable': true,
            'configurable': true
        };
    });
    
    // Shallow copy other props
    properties.loc = {
        'value': node.loc,
        'enumerable': false
    };
    properties.ud = {
        'value': node.ud,
        'enumerable': false
    };
    
    return Object.create(
        Object.getPrototypeOf(node),
        properties);
};

/* Creation
 ******************************************************************************/
/**
 * 
 */
var defineNode = function(parent, type, children, attributes, ctor) {
    ctor.type = type;
    ctor.prototype = new parent;
    ctor.prototype.constructor = ctor;
    ctor.prototype.children = children;
    ctor.prototype.attributes = attributes;
    ctor.prototype.type = ctor.type;
    ctor.create = function(/*...*/) {
        return new (ctor.bind.apply(ctor, concatArgs([null], arguments)));
    };
    
    require('ecma_ast/serialization').registerNode(type, ctor);
    return ctor;
};


/* Export
 ******************************************************************************/
exports.Node = Node;

exports.construct = construct;
exports.setAttributes = setAttributes;

exports.defineNode = defineNode;

});