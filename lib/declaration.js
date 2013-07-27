/**
 * @fileOverview ECMASscript declaration AST nodes.
 */
define(['ecma_ast/node'],
function(node){
"use strict";

/**
 * @constructor
 */
var Declaration = function() { };
Declaration.prototype = new node.Node;

/**
 * @constructor
 */
var FunctionDeclaration = node.defineNode(Declaration, 'FunctionDeclaration',
    ['params', 'body'],
    function(loc, id, params, body) {
        node.Node.call(this, loc);
        this.id = id;
        this.params = params;
        this.body = body;
    });

/**
 * @constructor
 */
var VariableDeclaration = node.defineNode(Declaration, 'VariableDeclaration',
    ['declarations'],
    function(loc, declarations) {
        node.Node.call(this, loc);
        this.declarations = declarations;
    });

/**
 * VariableDeclarator
 */
var VariableDeclarator = node.defineNode(Declaration, 'VariableDeclarator',
    ['id', 'init'],
    function(loc, id, init) {
        node.Node.call(this, loc);
        this.id = id;
        this.init = (init || null);
    });

/* Export
 ******************************************************************************/
return {
    'Declaration': Declaration,
    
    'FunctionDeclaration': FunctionDeclaration,
    
    'VariableDeclaration': VariableDeclaration,
    'VariableDeclarator': VariableDeclarator
};

});