define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var Node = __o["Node"],
        defineNode = __o["defineNode"],
        SwitchCase, CatchClause, Clause = (function() {});
    (Clause.prototype = new(Node)());
    (SwitchCase = defineNode(Clause, "SwitchCase", ["test", "consequent"], [], (function(loc, test, consequent) {
        var self = this;
        Node.call(self, loc);
        (self.test = (test || null));
        (self.consequent = consequent);
    })));
    (CatchClause = defineNode(Clause, "CatchClause", ["param", "body"], [], (function(loc, param, body) {
        var self = this;
        Node.call(self, loc);
        (self.param = param);
        (self.body = body);
    })));
    (exports.SwitchCase = SwitchCase);
    (exports.CatchClause = CatchClause);
}));