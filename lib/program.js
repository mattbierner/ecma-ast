/**
 * @fileOverview ECMAScript program AST nodes.
 */
define(['ecma_ast/node'],
function(node){
"use strict";

/**
 * @constructor
 */
var Program = node.defineNode(node.Node, 'Program',
    ['body'],
    function(loc, body) {
        node.Node.call(this, loc);
        this.body = body;
    });

/* Export
 ******************************************************************************/
return {
    'Program': Program,
};

});