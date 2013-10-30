/**
 * @fileOverview ECMAScript 5.1 lex tokens.
 */
define(['ecma_ast/node'],
function(node){
"use strict";

/**
 * @constructor
 */
var Token = function(loc, value) {
    node.Node.call(this, loc);
    this.value = value;
};
Token.prototype = new node.Node;

/**
 * @constructor
 */
var StringToken = node.defineNode(Token, 'String',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/**
 * @constructor
 */
var NumberToken = node.defineNode(Token, 'Number',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/**
 * @constructor
 */
var RegularExpressionToken = node.defineNode(Token, 'RegularExpression',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/**
 * @constructor
 */
var BooleanToken = node.defineNode(Token, 'Boolean',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/**
 * @constructor
 */
var NullToken = node.defineNode(Token, 'Null',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/**
 * 
 */
var IdentifierToken = node.defineNode(Token, 'Identifier',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/**
 * @constructor
 */
var KeywordToken = node.defineNode(Token, 'Keyword',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/**
 * 
 */
var PunctuatorToken = node.defineNode(Token, 'Punctuator',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/**
 * @constructor
 */
var CommentToken = node.defineNode(Token, 'Comment',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/**
 * @constructor
 */
var WhitespaceToken = node.defineNode(Token, 'Whitespace',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/**
 * @constructor
 */
var LineTerminatorToken = node.defineNode(Token, 'LineTerminator',
    [],
    ['value'],
    function(loc, value) {
        Token.call(this, loc, value);
    });

/* Export
 ******************************************************************************/
return {
    'Token': Token,
    
    'StringToken': StringToken,
    'NumberToken': NumberToken,
    'RegularExpressionToken': RegularExpressionToken,
    'BooleanToken': BooleanToken,
    'NullToken': NullToken,
    
    'IdentifierToken': IdentifierToken,
    'KeywordToken': KeywordToken,
    'PunctuatorToken': PunctuatorToken,
    
    'CommentToken': CommentToken,
    'WhitespaceToken': WhitespaceToken,
    'LineTerminatorToken': LineTerminatorToken
};

});