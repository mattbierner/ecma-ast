define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var Node = __o["Node"],
        defineNode = __o["defineNode"],
        Declaration, FunctionDeclaration, VariableDeclaration, VariableDeclarator;
    (Declaration = (function() {}));
    (Declaration.prototype = new(Node)());
    (FunctionDeclaration = defineNode(Declaration, "FunctionDeclaration", ["params", "body"], [], (function(loc,
        id, params, body) {
        var self = this;
        Node.call(self, loc);
        (self.id = id);
        (self.params = params);
        (self.body = body);
    })));
    (VariableDeclaration = defineNode(Declaration, "VariableDeclaration", ["declarations"], [], (function(loc,
        declarations) {
        var self = this;
        Node.call(self, loc);
        (self.declarations = declarations);
    })));
    (VariableDeclarator = defineNode(Declaration, "VariableDeclarator", ["id", "init"], [], (function(loc, id,
        init) {
        var self = this;
        Node.call(self, loc);
        (self.id = id);
        (self.init = (init || null));
    })));
    (exports.Declaration = Declaration);
    (exports.FunctionDeclaration = FunctionDeclaration);
    (exports.VariableDeclaration = VariableDeclaration);
    (exports.VariableDeclarator = VariableDeclarator);
}));