"use strict";
var __o = require("./node"),
    Node = __o["Node"],
    defineNode = __o["defineNode"],
    Program;
(Program = defineNode(Node, "Program", ["body"], [], (function(loc, body) {
    var self = this;
    Node.call(self, loc);
    (self.body = body);
})));
(exports.Program = Program);