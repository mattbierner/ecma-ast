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
 * @constructor
 */
var Identifier = node.defineNode(node.Node, 'Identifier',
    [],
    ['name'],
    function(loc, name) {
        node.Node.call(this, loc);
        this.name = name;
    });

/**
 * @constructor
 */
var Literal = node.defineNode(node.Node, 'Literal',
    [],
    ['kind', 'value'],
    function(loc, kind, value) {
        node.Node.call(this, loc);
        this.kind = kind
        this.value = value;
    });

/**
 * @constructor
 */
var ObjectValue = node.defineNode(node.Node, 'ObjectValue',
    ['key', 'value'],
    [],
    function(loc, key, value) {
        node.Node.call(this, key, value);
        this.key = key;
        this.value = value;
    });

/**
 * @constructor
 */
var ObjectGetter = node.defineNode(node.Node, 'ObjectGetter',
    ['key', 'value'],
    [],
    function(loc, key, value) {
        node.Node.call(this, key, value);
        this.key = key;
        this.value = value;
    });

/**
 * @constructor
 */
var ObjectSetter = node.defineNode(node.Node, 'ObjectSetter',
    ['key', 'value'],
    [],
    function(loc, key, value) {
        node.Node.call(this, key, value);
        this.key = key;
        this.value = value;
    });

/* 
 ******************************************************************************/

/* Export
 ******************************************************************************/
return {
    'Identifier': Identifier,
    'Literal': Literal,
    
    'ObjectValue': ObjectValue,
    'ObjectGetter': ObjectGetter,
    'ObjectSetter': ObjectSetter
};

});