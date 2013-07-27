/**
 * @fileOverview AST clause for ECMAScript 5.1 based on the
 * SpiderMonkey Parser API.
 */
define(['ecma/ast/node'],
function(node){
"use strict";

/* 
 ******************************************************************************/
/**
 * Identifier
 * @constructor
 */
var Identifier = function(loc, name) {
    node.Node.call(this, loc);
    this.name = name;
};
Identifier.prototype = new node.Node;
Identifier.prototype.constructor = Identifier;

Identifier.type = "Identifier";

Identifier.create = function(loc, name) {
    return new Identifier(loc, name);
};

Identifier.prototype.type = Identifier.type;

/**
 * Literal
 * @constructor
 */
var Literal = function(loc, value, kind) {
    node.Node.call(this, loc);
    this.value = value;
    this.kind = kind
};
Literal.prototype = new node.Node;
Literal.prototype.constructor = Literal;

Literal.type = "Literal";

Literal.create = function(loc, value, kind) {
    return new Literal(loc, value, kind);
};

Literal.prototype.type = Literal.type;

/* Export
 ******************************************************************************/
return {
    'Identifier': Identifier,
    'Literal': Literal
};

});