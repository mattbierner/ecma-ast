/*
 * THIS FILE IS AUTO GENERATED from 'lib/statement.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("./node"),
    Node = __o["Node"],
    defineNode = __o["defineNode"],
    Statement, DebuggerStatement, BlockStatement, ExpressionStatement, EmptyStatement, IfStatement, LabeledStatement,
        BreakStatement, ContinueStatement, WithStatement, SwitchStatement, ReturnStatement, ThrowStatement,
        TryStatement, WhileStatement, DoWhileStatement, ForStatement, ForInStatement;
(Statement = (function() {
    var self = this;
}));
(Statement.prototype = new(Node)());
(EmptyStatement = defineNode(Statement, "EmptyStatement", [], [], (function(loc) {
    var self = this;
    Node.call(self, loc);
})));
(DebuggerStatement = defineNode(Statement, "DebuggerStatement", [], [], (function(loc) {
    var self = this;
    Node.call(self, loc);
})));
(BlockStatement = defineNode(Statement, "BlockStatement", ["body"], [], (function(loc, body) {
    var self = this;
    Node.call(self, loc);
    (self.body = body);
})));
(ExpressionStatement = defineNode(Statement, "ExpressionStatement", ["expression"], [], (function(loc, expression) {
    var self = this;
    Node.call(self, loc);
    (self.expression = expression);
})));
(IfStatement = defineNode(Statement, "IfStatement", ["test", "consequent", "alternate"], [], (function(loc, test,
    consequent, alternate) {
    var self = this;
    Node.call(self, loc);
    (self.test = test);
    (self.consequent = consequent);
    (self.alternate = (alternate || null));
})));
(LabeledStatement = defineNode(Statement, "LabeledStatement", ["body"], [], (function(loc, label, body) {
    var self = this;
    Node.call(self, loc);
    (self.label = label);
    (self.body = body);
})));
(BreakStatement = defineNode(Statement, "BreakStatement", ["label"], [], (function(loc, label) {
    var self = this;
    Node.call(self, loc);
    (self.label = (label || null));
})));
(ContinueStatement = defineNode(Statement, "ContinueStatement", ["label"], [], (function(loc, label) {
    var self = this;
    Node.call(self, loc);
    (self.label = (label || null));
})));
(WithStatement = defineNode(Statement, "WithStatement", ["object", "body"], [], (function(loc, object, body) {
    var self = this;
    Node.call(self, loc);
    (self.object = object);
    (self.body = body);
})));
(SwitchStatement = defineNode(Statement, "SwitchStatement", ["discriminant", "cases"], [], (function(loc, discriminant,
    cases) {
    var self = this;
    Node.call(self, loc);
    (self.discriminant = discriminant);
    (self.cases = cases);
})));
(ReturnStatement = defineNode(Statement, "ReturnStatement", ["argument"], [], (function(loc, argument) {
    var self = this;
    Node.call(self, loc);
    (self.argument = (argument || null));
})));
(ThrowStatement = defineNode(Statement, "ThrowStatement", ["argument"], [], (function(loc, argument) {
    var self = this;
    Node.call(self, loc);
    (self.argument = argument);
})));
(TryStatement = defineNode(Statement, "TryStatement", ["block", "handler", "finalizer"], [], (function(loc, block,
    handler, finalizer) {
    var self = this;
    Node.call(self, loc);
    (self.block = block);
    (self.handler = handler);
    (self.finalizer = finalizer);
})));
(WhileStatement = defineNode(Statement, "WhileStatement", ["test", "body"], [], (function(loc, test, body) {
    var self = this;
    Node.call(self, loc);
    (self.test = test);
    (self.body = body);
})));
(DoWhileStatement = defineNode(Statement, "DoWhileStatement", ["body", "test"], [], (function(loc, body, test) {
    var self = this;
    Node.call(self, loc);
    (self.test = test);
    (self.body = body);
})));
(ForStatement = defineNode(Statement, "ForStatement", ["init", "test", "update", "body"], [], (function(loc, init, test,
    update, body) {
    var self = this;
    Node.call(self, loc);
    (self.init = (init || null));
    (self.test = (test || null));
    (self.update = (update || null));
    (self.body = body);
})));
(ForInStatement = defineNode(Statement, "ForInStatement", ["left", "right", "body"], [], (function(loc, left, right,
    body) {
    var self = this;
    Node.call(self, loc);
    (self.left = left);
    (self.right = right);
    (self.body = body);
})));
(exports.Statement = Statement);
(exports.DebuggerStatement = DebuggerStatement);
(exports.BlockStatement = BlockStatement);
(exports.ExpressionStatement = ExpressionStatement);
(exports.EmptyStatement = EmptyStatement);
(exports.IfStatement = IfStatement);
(exports.LabeledStatement = LabeledStatement);
(exports.BreakStatement = BreakStatement);
(exports.ContinueStatement = ContinueStatement);
(exports.WithStatement = WithStatement);
(exports.SwitchStatement = SwitchStatement);
(exports.ReturnStatement = ReturnStatement);
(exports.ThrowStatement = ThrowStatement);
(exports.TryStatement = TryStatement);
(exports.WhileStatement = WhileStatement);
(exports.DoWhileStatement = DoWhileStatement);
(exports.ForStatement = ForStatement);
(exports.ForInStatement = ForInStatement);