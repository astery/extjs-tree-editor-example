define(['extjs'], function (Ext) {
  return DocumentPointer = Ext.extend(Ext.util.Observable, {
    constructor: function (document) {
      DocumentPointer.superclass.constructor.call(this, {});
      this.addEvents('change');
      this.document = document;
    },
    replaceWith: function (doc) {
      this.document = doc;
      this.fireEvent('change');
    },
    replaceWithParent: function () {
      this.document = this.document.parentNode;
      this.fireEvent('change');
    }
  });
});