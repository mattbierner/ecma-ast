# ChangeLog #

## 2.0.0 - July 26, 2013
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