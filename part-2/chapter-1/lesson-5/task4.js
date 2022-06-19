
/* Объектом какого класса является document? */
console.log(document) // [object HTMLDocument]

/* Какое место он занимает в DOM-иерархии? */

//HTMLDocument - Document - Node

/* Наследует ли он от Node или от Element, или может от HTMLElement? */
console.log(HTMLDocument.prototype.constructor.name); // HTMLDocument
console.log(HTMLDocument.prototype.__proto__.constructor.name); // Document
console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node