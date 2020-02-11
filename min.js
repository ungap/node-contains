/*! (c) Andrea Giammarchi - ISC */
var nodeContains=Node.prototype.contains||function(o){return!!(o.compareDocumentPosition(this)&o.DOCUMENT_POSITION_CONTAINS)};