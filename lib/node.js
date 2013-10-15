/**
 * @fileOverview Node serialization
 */
define(['require', 'exports', 'ecma_ast/serialization'],
function(require, exports){
//"use strict";

var concatArgs = (function(){
    var map = function(x) { return x; };
    
    return function(arr, args) {
        return arr.concat([].map.call(args, map));
    };
}());

var keys = Object.keys;
    
var map = Function.prototype.call.bind(Array.prototype.map);
var reduce = Function.prototype.call.bind(Array.prototype.reduce);

var copy = function(obj) {
    var out = new (Object.getPrototypeOf(obj).constructor)();
    for (var i in obj)
        out[i] = obj[i];
    return out;
};

var defineProperty = function(obj, prop, descriptor) {
    return Object.defineProperty(copy(obj), prop, descriptor);
};

/* Node
 ******************************************************************************/
/**
 * Base class for nodes
 * 
 * @param loc Location.
 * @param ud UserData
 */
var Node = function(loc, ud) {
    Object.defineProperties(this, {
        'loc': {
            'value': loc,
            'enumerable': false
        },
        'ud': {
            'value': (ud || null),
            'enumerable': false
        }
    });
};

/* Operations
 ******************************************************************************/
/**
 * Construct a node with given attributes and children.
 * 
 * Nulls all undefined children.
 * 
 * @param proto Node prototype.
 * @param loc Location.
 * @param ud Userdata.
 * @param children Object mappings keys to children values.
 * @param attributes Object mappings keys to attribute values.
 * 
 * @return New node.
 */
var construct = function(proto, loc, ud, children, attributes) {
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
    proto.children.forEach(function(key) {
        properties[key] = (properties[key] || {
            'value': null,
            'enumerable': true,
            'configurable': true
        });
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
        'value': loc,
        'enumerable': false
    };
    properties.ud = {
        'value': ud,
        'enumerable': false
    };
    
    return Object.create(
        proto,
        properties);
};

/**
 * Reconstruct a node with new attributes and children.
 * 
 * @param base Node to reconstruct.
 * @param children Object mappings keys to children values.
 * @param attributes Object mappings keys to attribute values.
 * 
 * @return Reconstructed node.
 */
var reconstruct = function(base, children, attributes) {
    return construct(
        Object.getPrototypeOf(base),
        base.loc,
        base.ud,
        children,
        attributes);
};

/**
 * Create a new node from a base with children and attributes included from
 * `children` and `attributes`.
 * 
 * Unlike `reconstruct`, `children` and `attributes` are not the list of all
 * properties the node will have, but difference with the current node.
 * 
 * @param base Base node to transform.
 * @param children Object mappings keys to children values.
 * @param attributes Object mappings keys to attribute values.
 * 
 * @return Modified node.
 */
var modify = function(base, children, attributes) {
    var allChildren = {},
        allAttributes = {};
    
    base.children.forEach(function(key) {
        allChildren[key] = base[key];
    });
    Object.keys(children).forEach(function(key) {
        allChildren[key] = children[key];
    });
    
    base.attributes.forEach(function(key) {
        allAttributes[key] = base[key];
    });
    Object.keys(attributes).forEach(function(key) {
        allAttributes[key] = attributes[key];
    });
    
    return reconstruct(
        base,
        allChildren,
        allAttributes);
};

/**
 * Set the loc of a node.
 * 
 * @param base Base node to transform.
 * @param loc New loc.
 * 
 * @return Transformed node.
 */
var setLoc = function(base, loc) {
    return construct(
        Object.getPrototypeOf(base),
        loc,
        base.ud,
        reduce(base.children, function(o, key) { o[key] = base[key]; return o; }, {}),
        reduce(base.attributes, function(o, key) { o[key] = base[key]; return o; }, {}));
};

/**
 * Set the user data of a node.
 * 
 * @param base Base node to transform.
 * @param ud New user data.
 * 
 * @return Transformed node.
 */
var setUserData = function(base, ud) {
    return construct(
        Object.getPrototypeOf(base),
        base.loc,
        ud,
        reduce(base.children, function(o, key) { o[key] = base[key]; return o; }, {}),
        reduce(base.attributes, function(o, key) { o[key] = base[key]; return o; }, {}));
};

/* User Data
 ******************************************************************************/
/**
 * Get a user data entry.
 * 
 * @param node Node to transform.
 * @param key Targeted user data key.
 * 
 * @return Value or null if none.
 */
var getData = function(node, key) {
    return (node.ud ?
        node.ud[key] :
        null);
};

/**
 * Modifies a user data entry.
 * 
 * @param node Node to transform.
 * @param key Targeted user data key.
 * @param f Function mapping current value to new value.
 * 
 * @return Transformed node.
 */
var modifyData = function(node, key, f) {
    return setUserdata(
        node,
        defineProperty(
            (node.ud || {}),
            key, {
                'value': f(getData(node, key)),
                'enumerable': true
            }));
};

/**
 * Set a user data entry.
 * 
 * @param node Node to transform.
 * @param key Targeted user data key.
 * @param value New value.
 * 
 * @return Transformed node.
 */
var setData = function(node, key, value) {
    return modifyData(node, key, function() { return value; });
};

/* Creation
 ******************************************************************************/
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
exports.reconstruct = reconstruct;
exports.modify = modify;
exports.setLoc = setLoc;
exports.setUserData = setUserData;

exports.getData = getData;
exports.modifyData = modifyData;
exports.setData = setData;

exports.defineNode = defineNode;

});