/*! (c) Andrea Giammarchi - ISC */
var nodeContains = Node.prototype.contains || function contains(el) {
  return !!(el.compareDocumentPosition(this) & el.DOCUMENT_POSITION_CONTAINS);
};export default nodeContains;
