define(["require", "exports"], (function(require, exports) {
    "use strict";
    var SourcePosition, SourceLocation;
    (SourcePosition = (function(line, column) {
        var self = this;
        (self.line = line);
        (self.column = column);
    }));
    (SourcePosition.prototype.constructor = SourcePosition);
    (SourcePosition.initial = new(SourcePosition)(1, 0));
    (SourcePosition.prototype.increment = (function(tok) {
        var self = this;
        return ((tok === "\n") ? new(SourcePosition)((self.line + 1), 0) : new(SourcePosition)(self.line, (
            self.column + 1)));
    }));
    (SourcePosition.prototype.toString = (function() {
        var self = this;
        return (((("{line:" + self.line) + " col:") + self.column) + "}");
    }));
    (SourcePosition.prototype.compare = (function(pos) {
        var self = this;
        return ((self.line === pos.line) ? (self.column - pos.column) : (self.line - pos.line));
    }));
    (SourceLocation = (function(file, start, end) {
        var self = this;
        (self.file = file);
        (self.start = start);
        (self.end = end);
    }));
    (SourceLocation.prototype.toString = (function() {
        var self = this;
        return (((((("{" + self.file) + " start:") + self.start) + " end:") + self.end) + "}");
    }));
    (SourceLocation.merge = (function(s1, s2) {
        return new(SourceLocation)(s1.file, ((s1.start.compare(s2.start) > 0) ? s2.start : s1.start), (
            (s1.end.compare(s2.end) > 0) ? s1.end : s2.end));
    }));
    (exports.SourcePosition = SourcePosition);
    (exports.SourceLocation = SourceLocation);
}));