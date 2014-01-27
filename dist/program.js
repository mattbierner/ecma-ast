define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var Node = __o["Node"],
        defineNode = __o["defineNode"],
        Program;
    (Program = defineNode(Node, "Program", ["body"], [], (function(loc, body) {
        var self = this;
        Node.call(self, loc);
        (self.body = body);
    })));
    (exports.Program = Program);
}));