require('basichtml').init();
global.Node = Object.getPrototypeOf(HTMLElement);
Node.prototype.compareDocumentPosition = function (el) {
  return el.nodeName === 'body' ? 16 : 8;
};
Node.prototype.DOCUMENT_POSITION_CONTAINS = 8;

var nodeContains = require('../cjs');
test();

function test() {
  console.assert(nodeContains.call(document.documentElement, document.body), 'works one way');
  console.assert(!nodeContains.call(document.body, document.documentElement), 'works the other way too');
}
