/**
 * @fileOverview AST clause for ECMAScript 5.1 based on the
 * SpiderMonkey Parser API.
 */
define(['ecma_ast/node'],
function(node){
"use strict";

/* 
 ******************************************************************************/
/**
 * SwitchCase
 */
var SwitchCase = function(loc, test, consequent) {
    node.Node.call(this, loc);
    this.test = (test || null);
    this.consequent = consequent;
};
SwitchCase.prototype = new node.Node;
SwitchCase.prototype.type = "SwitchCase";

SwitchCase.create = function(loc, test, consequent) {
    return new SwitchCase(loc, test, consequent);
};

/**
 * CatchClause
 */
var CatchClause = function(loc, param, body) {
    node.Node.call(this, loc);
    this.param = param;
    this.body = body;
};
CatchClause.prototype = new node.Node;
CatchClause.prototype.type = "CatchClause";

CatchClause.create = function(loc, param, body) {
    return new CatchClause(loc, param, body);
};

/* Export
 ******************************************************************************/
return {
    'SwitchCase': SwitchCase,
    'CatchClause': CatchClause
};

});