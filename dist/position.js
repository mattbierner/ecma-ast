/*
 * THIS FILE IS AUTO GENERATED from 'lib/position.kep'
 * DO NOT EDIT
*/define(["require", "exports"], (function(require, exports) {
    "use strict";
    var SourcePosition, SourceLocation;
    (SourcePosition = (function(line, column, file) {
        var self = this;
        (self.line = line);
        (self.column = column);
        (self.file = file);
    }));
    (SourcePosition.initial = new(SourcePosition)(1, 0, null));
    (SourcePosition.prototype.increment = (function(tok) {
        var self = this;
        return ((tok === "\n") ? new(SourcePosition)((self.line + 1), 0, self.file) : new(
            SourcePosition)(self.line, (self.column + 1), self.file));
    }));
    (SourcePosition.prototype.toString = (function() {
        var self = this;
        return (((("{line:" + self.line) + " col:") + self.column) + "}");
    }));
    (SourcePosition.prototype.compare = (function(pos) {
        var self = this;
        return ((self.line === pos.line) ? (self.column - pos.column) : (self.line - pos.line));
    }));
    (SourceLocation = (function(start, end, file) {
        var self = this;
        (self.start = start);
        (self.end = end);
        (self.file = file);
    }));
    (SourceLocation.prototype.toString = (function() {
        var self = this;
        return (((((("{" + self.file) + " start:") + self.start) + " end:") + self.end) + "}");
    }));
    (SourceLocation.merge = (function(s1, s2) {
        return new(SourceLocation)(((s1.start.compare(s2.start) > 0) ? s2.start : s1.start), ((s1.end.compare(
            s2.end) > 0) ? s1.end : s2.end), (s1.file || s2.file));
    }));
    (exports["SourcePosition"] = SourcePosition);
    (exports["SourceLocation"] = SourceLocation);
}));