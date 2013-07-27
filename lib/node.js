/**
 * @fileOverview Ast Node
 */
define([],
function(){
"use strict";

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

/* Creation
 ******************************************************************************/
var defineNode = function(parent, type, children, ctor) {
    ctor.type = type;
    ctor.prototype = new parent;
    ctor.prototype.constructor = ctor;
    ctor.prototype.type = ctor.type;
    ctor.create = function(/*...*/) {
        return new (ctor.bind.apply(ctor, [null].concat(arguments)));
    };
    return ctor;
};


/* Export
 ******************************************************************************/
return {
    'Node': Node,
    'defineNode': defineNode
};

});