/**
 * @fileOverview ECMAScript clause AST nodes.
 */
define(['ecma_ast/node'],
function(node){
"use strict";

/**
 * @constructor
 */
var Clause = function() { };
Clause.prototype = new node.Node;

/* Instances
 ******************************************************************************/
/**
 * @constructor
 */
var SwitchCase = node.defineNode(Clause, 'SwitchCase',
    ['test', 'consequent'],
    [],
    function(loc, test, consequent) {
        node.Node.call(this, loc);
        this.test = (test || null);
        this.consequent = consequent;
    });

/**
 * @constructor
 */
var CatchClause = node.defineNode(Clause, 'CatchClause',
    ['param', 'body'],
    [],
    function(loc, param, body) {
        node.Node.call(this, loc);
        this.param = param;
        this.body = body;
    });

/* Export
 ******************************************************************************/
return {
    'SwitchCase': SwitchCase,
    'CatchClause': CatchClause
};

});