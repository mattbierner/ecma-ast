"use strict";
var __o = require("./node"),
    Node = __o["Node"],
    defineNode = __o["defineNode"],
    Identifier, Literal, ObjectValue, ObjectGetter, ObjectSetter;
(Identifier = defineNode(Node, "Identifier", [], ["name"], (function(loc, name) {
    var self = this;
    Node.call(self, loc);
    (self.name = name);
})));
(Literal = defineNode(Node, "Literal", [], ["kind", "value"], (function(loc, kind, value) {
    var self = this;
    Node.call(self, loc);
    (self.kind = kind);
    (self.value = value);
})));
(ObjectValue = defineNode(Node, "ObjectValue", ["key", "value"], [], (function(loc, key, value) {
    var self = this;
    Node.call(self, key, value);
    (self.key = key);
    (self.value = value);
})));
(ObjectGetter = defineNode(Node, "ObjectGetter", ["key", "value"], [], (function(loc, key, value) {
    var self = this;
    Node.call(self, key, value);
    (self.key = key);
    (self.value = value);
})));
(ObjectSetter = defineNode(Node, "ObjectSetter", ["key", "value"], [], (function(loc, key, value) {
    var self = this;
    Node.call(self, key, value);
    (self.key = key);
    (self.value = value);
})));
(exports.Identifier = Identifier);
(exports.Literal = Literal);
(exports.ObjectValue = ObjectValue);
(exports.ObjectGetter = ObjectGetter);
(exports.ObjectSetter = ObjectSetter);