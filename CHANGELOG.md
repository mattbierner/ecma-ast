# ChangeLog

## 2.6.0 - May 15, 2014
* Added `file` field to `SourcePosition`.

## 2.5.1 - April 2, 2014
* Fixed `setData`.

## 2.5.0 - April 2, 2014
* Improved performance of Node modification.
* Changed node modification API to take base nodes instead of requiring prototype.

## 2.4.2 - Feb 16, 2014
* Fixed `FuncitonDeclaration` not having an `id` child metadata.

## 2.4.0 - January 26, 2014
* Added node package.

## 2.2.0  - November 21, 2013
* Added position.
* Added nodes for object literal values.

## 2.1.0 - Oct 29, 2013
* Made token instances of nodes with standard node operations.

## 2.0.0 - Oct 2, 2013
* Added methods for serializing and unserializing an AST.
* Changed node definition to have two types, `children` for actual child nodes and
  `attributes` for properties of the node that at not themselves nodes.
* Added methods for transforming nodes.
* Added user data object to all notes.
* Made `loc` and `ud` non enumerable.

## 1.0.0 - July 26, 2013
* Initial fork from parse-ecma.
* Defined all nodes using common API to support reflection required by neith.
* Added `node.construct` for neith.