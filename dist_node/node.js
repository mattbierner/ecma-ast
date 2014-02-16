/*
 * THIS FILE IS AUTO GENERATED from 'lib/node.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("./serialization"),
    registerNode = __o["registerNode"],
    Node, construct, reconstruct, modify, setLoc, setUserData, getData, modifyData, setData, defineNode, concatArgs = (
        function() {
            var id = (function(x) {
                return x;
            });
            return (function(arr, args) {
                return arr.concat([].map.call(args, id));
            });
        })(),
    keys = Object.keys,
    map = Function.prototype.call.bind(Array.prototype.map),
    reduce = Function.prototype.call.bind(Array.prototype.reduce),
    copy = (function(obj) {
        var out = Object.create(Object.getPrototypeOf(obj));
        Object.getOwnPropertyNames(obj)
            .forEach((function(i) {
                var self = this;
                (out[i] = obj[i]);
            }));
        return out;
    }),
    defineProperty = (function(obj, prop, descriptor) {
        return Object.defineProperty(copy(obj), prop, descriptor);
    });
(Node = (function(loc, ud) {
    var self = this;
    Object.defineProperties(self, ({
        "loc": ({
            "value": loc,
            "enumerable": false
        }),
        "ud": ({
            "value": (ud || null),
            "enumerable": false
        })
    }));
}));
(construct = (function(proto, loc, ud, children, attributes) {
    var properties = ({});
    Object.keys(children)
        .forEach((function(key) {
            (properties[key] = ({
                "value": children[key],
                "enumerable": true,
                "configurable": true
            }));
        }));
    proto.children.forEach((function(key) {
        (properties[key] = (properties[key] || ({
            "value": null,
            "enumerable": true,
            "configurable": true
        })));
    }));
    Object.keys(attributes)
        .forEach((function(key) {
            (properties[key] = ({
                "value": attributes[key],
                "enumerable": true,
                "configurable": true
            }));
        }));
    (properties.loc = ({
        "value": loc,
        "enumerable": false
    }));
    (properties.ud = ({
        "value": ud,
        "enumerable": false
    }));
    return Object.create(proto, properties);
}));
(reconstruct = (function(base, children, attributes) {
    return construct(Object.getPrototypeOf(base), base.loc, base.ud, children, attributes);
}));
(modify = (function(base, children, attributes) {
    var allChildren = ({}),
        allAttributes = ({});
    base.children.forEach((function(key) {
        (allChildren[key] = base[key]);
    }));
    if (children) Object.keys(children)
        .forEach((function(key) {
            (allChildren[key] = children[key]);
        }));
    base.attributes.forEach((function(key) {
        (allAttributes[key] = base[key]);
    }));
    if (attributes) Object.keys(attributes)
        .forEach((function(key) {
            (allAttributes[key] = attributes[key]);
        }));
    return reconstruct(base, allChildren, allAttributes);
}));
(setLoc = (function(base, loc) {
    return construct(Object.getPrototypeOf(base), loc, base.ud, reduce(base.children, (function(o, key) {
        (o[key] = base[key]);
        return o;
    }), ({})), reduce(base.attributes, (function(o, key) {
        (o[key] = base[key]);
        return o;
    }), ({})));
}));
(setUserData = (function(base, ud) {
    return construct(Object.getPrototypeOf(base), base.loc, ud, reduce(base.children, (function(o, key) {
        (o[key] = base[key]);
        return o;
    }), ({})), reduce(base.attributes, (function(o, key) {
        (o[key] = base[key]);
        return o;
    }), ({})));
}));
(getData = (function(node, key) {
    return (node.ud ? node.ud[key] : null);
}));
(modifyData = (function(node, key, f) {
    return setUserData(node, defineProperty((node.ud || ({})), key, ({
        "value": f(getData(node, key)),
        "enumerable": true
    })));
}));
(setData = (function(node, key, value) {
    return modifyData(node, key, (function() {
        return value;
    }));
}));
(defineNode = (function(parent, type, children, attributes, ctor) {
    (ctor.type = type);
    (ctor.prototype = new(parent)());
    (ctor.prototype.constructor = ctor);
    (ctor.prototype.children = children);
    (ctor.prototype.attributes = attributes);
    (ctor.prototype.type = ctor.type);
    (ctor.create = (function() {
        var args = arguments;
        return new(ctor.bind.apply(ctor, concatArgs([null], args)))();
    }));
    require("./serialization")
        .registerNode(type, ctor);
    return ctor;
}));
(exports.Node = Node);
(exports.construct = construct);
(exports.reconstruct = reconstruct);
(exports.modify = modify);
(exports.setLoc = setLoc);
(exports.setUserData = setUserData);
(exports.getData = getData);
(exports.modifyData = modifyData);
(exports.setData = setData);
(exports.defineNode = defineNode);