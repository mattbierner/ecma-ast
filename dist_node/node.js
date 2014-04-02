/*
 * THIS FILE IS AUTO GENERATED from 'lib/node.kep'
 * DO NOT EDIT
*/"use strict";
var __o = require("./serialization"),
    registerNode = __o["registerNode"],
    Node, construct, reconstruct, modify, setLoc, setUserData, getData, modifyData, setData, defineNode, keys = Object.keys,
    setProperty = (function(obj, prop, value) {
        var out = ({}),
            props = keys(obj);
        for (var i = 0, len = props.length;
            (i < len);
            (i = (i + 1))) {
            var k = props[i];
            (out[k] = obj[k]);
        }
        (out[prop] = value);
        return out;
    });
(Node = (function(loc, ud) {
    var self = this;
    Object.defineProperties(self, ({
        "loc": ({
            "value": loc,
            "enumerable": false,
            "writable": true
        }),
        "ud": ({
            "value": (ud || null),
            "enumerable": false,
            "writable": true
        })
    }));
}));
(construct = (function(base, loc, ud, children, attributes) {
    var obj = new(base.constructor)(loc);
    (obj.ud = ud);
    var childs = base.children;
    for (var i = 0, len = childs.length;
        (i < len);
        (i = (i + 1))) {
        var k = childs[i];
        (obj[k] = (children[k] || null));
    }
    var attrs = base.attributes;
    for (var i0 = 0, len0 = attrs.length;
        (i0 < len0);
        (i0 = (i0 + 1))) {
        var k0 = attrs[i0];
        (obj[k0] = (attributes[k0] || null));
    }
    return obj;
}));
(reconstruct = (function(base, children, attributes) {
    return construct(base, base.loc, base.ud, children, attributes);
}));
(modify = (function(base, children, attributes) {
    var obj = new(base.constructor)(base.loc);
    (obj.ud = base.ud);
    var childs = base.children;
    for (var i = 0, len = childs.length;
        (i < len);
        (i = (i + 1))) {
        var k = childs[i];
        (obj[k] = (children[k] || base[k]));
    }
    var attrs = base.attributes;
    for (var i0 = 0, len0 = attrs.length;
        (i0 < len0);
        (i0 = (i0 + 1))) {
        var k0 = attrs[i0];
        (obj[k0] = (attributes[k0] || base[k0]));
    }
    return obj;
}));
(setLoc = (function(base, loc) {
    return construct(base, loc, base.ud, base, base);
}));
(setUserData = (function(base, ud) {
    return construct(base, base.loc, ud, base, base);
}));
(getData = (function(node, key) {
    return (node.ud && node.ud[key]);
}));
(modifyData = (function(node, key, f) {
    return setData(node, key, f(getData(node, key)));
}));
(setData = (function(node, key, value) {
    return setUserData(node, setProperty((node.ud || ({})), key, value));
}));
(defineNode = (function(parent, type, children, attributes, ctor) {
    (ctor.type = type);
    (ctor.prototype = new(parent)());
    (ctor.prototype.constructor = ctor);
    (ctor.prototype.children = children);
    (ctor.prototype.attributes = attributes);
    (ctor.prototype.type = ctor.type);
    var Fwd = (function(args) {
        var self = this;
        return ctor.apply(self, args);
    });
    (Fwd.prototype = ctor.prototype);
    (ctor.create = (function() {
        var args = arguments;
        return new(Fwd)(args);
    }));
    registerNode(type, ctor);
    return ctor;
}));
(exports["Node"] = Node);
(exports["construct"] = construct);
(exports["reconstruct"] = reconstruct);
(exports["modify"] = modify);
(exports["setLoc"] = setLoc);
(exports["setUserData"] = setUserData);
(exports["getData"] = getData);
(exports["modifyData"] = modifyData);
(exports["setData"] = setData);
(exports["defineNode"] = defineNode);