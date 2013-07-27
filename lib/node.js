/**
 * @fileOverview Ast Node
 */
define([],
function(){
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
 * Base class for nodes.
 */
var Node = function(loc) {
    this.loc = loc;
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
    Object.keys(x.children).forEach(function(key) {
        properties[key] = {
            'value': null,
            'enumerable': true,
            'configurable': true
        };
    });
    
    // Shallow copy other props
    Object.keys(x).forEach(function(key) {
        if (!properties.hasOwnProperty(key))
            properties[key] = {
                'value': x[key],
                'enumerable': true,
                'configurable': true
            };
    });
    
    return Object.create(Object.getPrototypeOf(x), properties);
};

/* Creation
 ******************************************************************************/
var defineNode = function(parent, type, children, ctor) {
    ctor.type = type;
    ctor.children = children;
    ctor.prototype = new parent;
    ctor.prototype.constructor = ctor;
    ctor.prototype.type = ctor.type;
    ctor.create = function(/*...*/) {
        return new (ctor.bind.apply(ctor, concatArgs([null], arguments)));
    };
    return ctor;
};


/* Export
 ******************************************************************************/
return {
    'Node': Node,
    
    'construct': construct,
    
    'defineNode': defineNode
};

});