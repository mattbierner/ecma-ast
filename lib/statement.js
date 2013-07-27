/**
 * @fileOverview AST statement nodes for ECMAScript 5.1 based on the
 * SpiderMonkey Parser API.
 */
define(['ecma_ast/node'],
function(node){
"use strict";

/**
 * @constructor
 */
var Statement = function() { };
Statement.prototype = new node.Node;

/**
 * @constructor
 */
var EmptyStatement = node.defineNode(Statement, "EmptyStatement",
    [],
    function(loc) {
        node.Node.call(this, loc);
    });

/**
 * @constructor
 */
var DebuggerStatement = node.defineNode(Statement, "DebuggerStatement",
    [],
    function(loc) {
        node.Node.call(this, loc);
    });

/**
 * @constructor
 */
var BlockStatement = node.defineNode(Statement, "BlockStatement",
    ['body'],
    function(loc, body) {
        node.Node.call(this, loc);
        this.body = body;
    });

/**
 * @constructor
 */
var ExpressionStatement =  node.defineNode(Statement, "ExpressionStatement",
    ['expression'],
    function(loc, expression) {
        node.Node.call(this, loc);
        this.expression = expression;
    });

/**
 * @constructor
 */
var IfStatement = node.defineNode(Statement, "IfStatement",
    ['test', 'consequent', 'alternate'],
    function(loc, test, consequent, alternate) {
        node.Node.call(this, loc);
        this.test = test;
        this.consequent = consequent;
        this.alternate = (alternate || null);
    });

/**
 * @constructor
 */
var LabeledStatement = node.defineNode(Statement, "LabeledStatement",
    ['body'],
    function(loc, label, body) {
        node.Node.call(this, loc);
        this.label = label;
        this.body = body;
    });

/**
 * @constructor
 */
var BreakStatement = node.defineNode(Statement, "BreakStatement",
    [],
    function(loc, label) {
        node.Node.call(this, loc);
        this.label = (label || null);
    });

/**
 * @constructor
 */
var ContinueStatement = node.defineNode(Statement, "ContinueStatement",
    [],
    function(loc, label) {
        node.Node.call(this, loc);
        this.label = (label || null);
    });

/**
 * @constructor
 */
var WithStatement = node.defineNode(Statement, "WithStatement",
    ['object', 'body'],
    function(loc, object, body) {
        node.Node.call(this, loc);
        this.object = object;
        this.body = body;
    });

/**
 * @constructor
 */
var SwitchStatement = node.defineNode(Statement, "SwitchStatement",
    ['discriminant', 'cases']
    function(loc, discriminant, cases) {
        node.Node.call(this, loc);
        this.discriminant = discriminant;
        this.cases = cases;
    });

/**
 * @constructor
 */
var ReturnStatement = node.defineNode(Statement, "ReturnStatement",
    ['argument'],
    function(loc, argument) {
        node.Node.call(this, loc);
        this.argument = (argument || null);
    });

/**
 * @constructor
 */
var ThrowStatement = node.defineNode(Statement, "ThrowStatement",
    ['argument'],
    function(loc, argument) {
        node.Node.call(this, loc);
        this.argument = argument;
    });

/**
 * @constructor
 */
var TryStatement = node.defineNode(Statement, "TryStatement",
    ['block', 'handler', 'finalizer'],
    function(loc, block, handler, finalizer) {
        node.Node.call(this, loc);
        this.block = block;
        this.handler = handler;
        this.finalizer = finalizer;
    });

/**
 * @constructor
 */
var WhileStatement = node.defineNode(Statement, "WhileStatement",
    ['test', 'body'],
    function(loc, test, body) {
        node.Node.call(this, loc);
        this.test = test;
        this.body = body;
    });

/**
 * @constructor
 */
var DoWhileStatement = node.defineNode(Statement, "DoWhileStatement",
    ['body', 'test'],
    function(loc, body, test) {
        node.Node.call(this, loc);
        this.test = test;
        this.body = body;
    });

/**
 * @constructor
 */
var ForStatement = node.defineNode(Statement, "ForStatement",
    ['init', 'test', 'update', 'body'],
    function(loc, init, test, update, body) {
        node.Node.call(this, loc);
        this.init = (init || null);
        this.test = (test || null);
        this.update = (update || null);
        this.body = body;
    });

/**
 * @constructor
 */
var ForInStatement = node.defineNode(Statement, "ForInStatement",
    ['left', 'right', 'body'],
    function(loc, left, right, body) {
        node.Node.call(this, loc);
        this.left = left;
        this.right = right;
        this.body = body;
    });

/* Export
 ******************************************************************************/
return {
    'Statement': Statement,
    
    'EmptyStatement': EmptyStatement,
    'DebuggerStatement': DebuggerStatement,
    'BlockStatement': BlockStatement,
    'ExpressionStatement': ExpressionStatement,
    'IfStatement': IfStatement,
    'LabeledStatement': LabeledStatement,
    'BreakStatement': BreakStatement,
    'ContinueStatement': ContinueStatement,
    'WithStatement': WithStatement,
    'SwitchStatement': SwitchStatement,
    'ReturnStatement': ReturnStatement,
    
    'ThrowStatement': ThrowStatement,
    'TryStatement': TryStatement,
    
    'WhileStatement': WhileStatement,
    'DoWhileStatement': DoWhileStatement,
    'ForStatement': ForStatement,
    'ForInStatement': ForInStatement
};

});