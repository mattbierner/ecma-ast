/**
 * @fileOverview AST expression Nodes for ECMAScript 5.1 based on the
 *   SpiderMonkey Parser API.
 */
define(['ecma_ast/node'],
function(node){
"use strict";


/**
 * @constructor
 */
var Expression = function() { };
Expression.prototype = new node.Node;

/* Instances
 ******************************************************************************/
/**
 * @constructor
 */
var ThisExpression = node.defineNode(Expression, 'ThisExpression',
    [],
    [],
    function(loc) {
        node.Node.call(this, loc);
    });

/**
 * @constructor
 */
var SequenceExpression = node.defineNode(Expression, 'SequenceExpression',
    ['expressions'],
    [],
    function(loc, expressions) {
        node.Node.call(this, loc);
        this.expressions = expressions;
    });

/**
 * @constructor
 */
var UnaryExpression = node.defineNode(Expression, 'UnaryExpression',
    ['argument'],
    ['operator'],
    function(loc, operator, argument) {
        node.Node.call(this, loc);
        this.operator = operator;
        this.argument = argument;
    });

/**
 * @constructor
 */
var BinaryExpression = node.defineNode(Expression, 'BinaryExpression',
    ['left', 'right'],
    ['operator'],
    function(loc, operator, left, right) {
        node.Node.call(this, loc);
        this.operator = operator;
        this.left = left;
        this.right = right;
    });

/**
 * @constructor
 */
var AssignmentExpression = node.defineNode(Expression, 'AssignmentExpression',
    ['left', 'right'],
    ['operator'],
    function(loc, operator, left, right) {
        node.Node.call(this, loc);
        this.operator = operator;
        this.left = left;
        this.right = right;
    });

/**
 * @constructor
 */
var UpdateExpression = node.defineNode(Expression, 'UpdateExpression',
    ['argument'],
    ['operator', 'prefix'],
    function(loc, operator, argument, prefix) {
        node.Node.call(this, loc);
        this.operator = operator;
        this.argument = argument;
        this.prefix = prefix;
    });

/**
 * @constructor
 */
var LogicalExpression = node.defineNode(Expression, 'LogicalExpression',
    ['left', 'right'],
    ['operator'],
    function(loc, operator, left, right) {
        node.Node.call(this, loc);
        this.operator = operator;
        this.left = left;
        this.right = right;
    });

/**
 * @constructor
 */
var ConditionalExpression = node.defineNode(Expression, 'ConditionalExpression',
    ['test', 'consequent', 'alternate'],
    [],
    function(loc, test, consequent, alternate) {
        node.Node.call(this, loc);
        this.test = test;
        this.consequent = consequent;
        this.alternate = alternate;
    });

/**
 * @constructor
 */
var NewExpression = node.defineNode(Expression, 'NewExpression',
    ['callee', 'args'],
    [],
    function(loc, callee, args) {
        node.Node.call(this, loc);
        this.callee = callee;
        this.args = args;
    });

/**
 * @constructor
 */
var CallExpression = node.defineNode(Expression, 'CallExpression',
    ['callee', 'args'],
    [],
    function(loc, callee, args) {
        node.Node.call(this, loc);
        this.callee = callee;
        this.args = args;
    });

/**
 * @constructor
 */
var MemberExpression = node.defineNode(Expression, 'MemberExpression',
    ['object', 'property'],
    ['computed'],
    function(loc, object, property, computed) {
        node.Node.call(this, loc);
        this.object = object;
        this.property = property;
        this.computed = computed;
    });

/**
 * @constructor
 */
var FunctionExpression = node.defineNode(Expression, 'FunctionExpression',
    ['id', 'params', 'body'],
    [],
    function(loc, id, params, body) {
        node.Node.call(this, loc);
        this.id = (id || null);
        this.params = params;
        this.body = body;
    });

/**
 * @constructor
 */
var ArrayExpression = node.defineNode(Expression, 'ArrayExpression',
    ['elements'],
    [],
    function(loc, elements) {
        node.Node.call(this, loc);
        this.elements = elements;
    });

/**
 * @constructor
 */
var ObjectExpression = node.defineNode(Expression, 'ObjectExpression',
    ['properties'],
    [],
    function(loc, properties) {
        node.Node.call(this, loc);
        this.properties = properties;
    });

/* Export
 ******************************************************************************/
return {
    'Expression': Expression,
    
    'ThisExpression': ThisExpression,
    'SequenceExpression': SequenceExpression,
    'UnaryExpression': UnaryExpression,
    'BinaryExpression': BinaryExpression,
    'AssignmentExpression': AssignmentExpression,
    'UpdateExpression': UpdateExpression,
    'LogicalExpression': LogicalExpression,
    'ConditionalExpression': ConditionalExpression,
    'NewExpression': NewExpression,
    'CallExpression': CallExpression,
    'MemberExpression': MemberExpression,
    
    'FunctionExpression': FunctionExpression,
    'ArrayExpression': ArrayExpression,
    'ObjectExpression': ObjectExpression
};

});