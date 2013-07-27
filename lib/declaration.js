/**
 * @fileOverview AST Declaration Nodes for ECMAScript 5.1 based on the
 * SpiderMonkey Parser API.
 */
define(['ecma_ast/node'],
function(node){
"use strict";

/**
 * Declaration
 */
var Declaration = function() { };
Declaration.prototype = new node.Node;

/**
 * FunctionDeclaration
 */
var FunctionDeclaration = function(loc, id, params, body) {
    node.Node.call(this, loc);
    this.id = id;
    this.params = params;
    this.body = body;
};
FunctionDeclaration.prototype = new Declaration;
FunctionDeclaration.prototype.type = "FunctionDeclaration";

FunctionDeclaration.create = function(loc, id, params, body) {
    return new FunctionDeclaration(loc, id, params, body);
};

/**
 * VariableDeclaration
 */
var VariableDeclaration = function(loc, declarations) {
    node.Node.call(this, loc);
    this.declarations = declarations;
};
VariableDeclaration.prototype = new Declaration;
VariableDeclaration.prototype.type = "VariableDeclaration";

VariableDeclaration.create = function(loc, declarations) {
    return new VariableDeclaration(loc, declarations);
};

/**
 * VariableDeclarator
 */
var VariableDeclarator = function(loc, id, init) {
    node.Node.call(this, loc);
    this.id = id;
    this.init = (init || null);
};
VariableDeclarator.prototype = new Declaration;
VariableDeclarator.prototype.type = "VariableDeclarator";

VariableDeclarator.create = function(loc, id, init) {
    return new VariableDeclarator(loc, id, init);
};

/* Export
 ******************************************************************************/
return {
    'Declaration': Declaration,
    
    'FunctionDeclaration': FunctionDeclaration,
    
    'VariableDeclaration': VariableDeclaration,
    'VariableDeclarator': VariableDeclarator
};

});