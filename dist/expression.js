define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var Node = __o["Node"],
        defineNode = __o["defineNode"],
        Expression, ThisExpression, SequenceExpression, UnaryExpression, BinaryExpression, AssignmentExpression,
            UpdateExpression, LogicalExpression, ConditionalExpression, NewExpression, CallExpression,
            MemberExpression, FunctionExpression, ArrayExpression, ObjectExpression;
    (Expression = (function() {
        var self = this;
    }));
    (Expression.prototype = new(Node)());
    (ThisExpression = defineNode(Expression, "ThisExpression", [], [], (function(loc) {
        var self = this;
        Node.call(self, loc);
    })));
    (SequenceExpression = defineNode(Expression, "SequenceExpression", ["expressions"], [], (function(loc,
        expressions) {
        var self = this;
        Node.call(self, loc);
        (self.expressions = expressions);
    })));
    (UnaryExpression = defineNode(Expression, "UnaryExpression", ["argument"], ["operator"], (function(loc,
        operator, argument) {
        var self = this;
        Node.call(self, loc);
        (self.operator = operator);
        (self.argument = argument);
    })));
    (BinaryExpression = defineNode(Expression, "BinaryExpression", ["left", "right"], ["operator"], (function(
        loc, operator, left, right) {
        var self = this;
        Node.call(self, loc);
        (self.operator = operator);
        (self.left = left);
        (self.right = right);
    })));
    (AssignmentExpression = defineNode(Expression, "AssignmentExpression", ["left", "right"], ["operator"], (
        function(loc, operator, left, right) {
            var self = this;
            Node.call(self, loc);
            (self.operator = operator);
            (self.left = left);
            (self.right = right);
        })));
    (UpdateExpression = defineNode(Expression, "UpdateExpression", ["argument"], ["operator", "prefix"], (
        function(loc, operator, argument, prefix) {
            var self = this;
            Node.call(self, loc);
            (self.operator = operator);
            (self.argument = argument);
            (self.prefix = prefix);
        })));
    (LogicalExpression = defineNode(Expression, "LogicalExpression", ["left", "right"], ["operator"], (function(
        loc, operator, left, right) {
        var self = this;
        Node.call(self, loc);
        (self.operator = operator);
        (self.left = left);
        (self.right = right);
    })));
    (ConditionalExpression = defineNode(Expression, "ConditionalExpression", ["test", "consequent", "alternate"], [], (
        function(loc, test, consequent, alternate) {
            var self = this;
            Node.call(self, loc);
            (self.test = test);
            (self.consequent = consequent);
            (self.alternate = alternate);
        })));
    (NewExpression = defineNode(Expression, "NewExpression", ["callee", "args"], [], (function(loc, callee,
        args) {
        var self = this;
        Node.call(self, loc);
        (self.callee = callee);
        (self.args = args);
    })));
    (CallExpression = defineNode(Expression, "CallExpression", ["callee", "args"], [], (function(loc, callee,
        args) {
        var self = this;
        Node.call(self, loc);
        (self.callee = callee);
        (self.args = args);
    })));
    (MemberExpression = defineNode(Expression, "MemberExpression", ["object", "property"], ["computed"], (
        function(loc, object, property, computed) {
            var self = this;
            Node.call(self, loc);
            (self.object = object);
            (self.property = property);
            (self.computed = computed);
        })));
    (FunctionExpression = defineNode(Expression, "FunctionExpression", ["id", "params", "body"], [], (function(
        loc, id, params, body) {
        var self = this;
        Node.call(self, loc);
        (self.id = (id || null));
        (self.params = params);
        (self.body = body);
    })));
    (ArrayExpression = defineNode(Expression, "ArrayExpression", ["elements"], [], (function(loc, elements) {
        var self = this;
        Node.call(self, loc);
        (self.elements = elements);
    })));
    (ObjectExpression = defineNode(Expression, "ObjectExpression", ["properties"], [], (function(loc,
        properties) {
        var self = this;
        Node.call(self, loc);
        (self.properties = properties);
    })));
    (exports.Expression = Expression);
    (exports.ThisExpression = ThisExpression);
    (exports.SequenceExpression = SequenceExpression);
    (exports.UnaryExpression = UnaryExpression);
    (exports.BinaryExpression = BinaryExpression);
    (exports.AssignmentExpression = AssignmentExpression);
    (exports.UpdateExpression = UpdateExpression);
    (exports.LogicalExpression = LogicalExpression);
    (exports.ConditionalExpression = ConditionalExpression);
    (exports.NewExpression = NewExpression);
    (exports.CallExpression = CallExpression);
    (exports.MemberExpression = MemberExpression);
    (exports.FunctionExpression = FunctionExpression);
    (exports.ArrayExpression = ArrayExpression);
    (exports.ObjectExpression = ObjectExpression);
}));