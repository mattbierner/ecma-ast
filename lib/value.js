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
    function(loc, name) {
        node.Node.call(this, loc);
        this.name = name;
    });

/**
 * @constructor
 */
var Literal = node.defineNode(node.Node, 'Literal',
    [],
    function(loc, kind, value) {
        node.Node.call(this, loc);
        this.kind = kind
        this.value = value;
    });

/* Export
 ******************************************************************************/
return {
    'Identifier': Identifier,
    'Literal': Literal
};

});