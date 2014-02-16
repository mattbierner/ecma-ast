# ChangeLog

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