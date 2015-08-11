define(['extjs'], function (Ext) {
  return DocumentPointer = Ext.extend(Ext.util.Observable, {
    constructor: function (document) {
      DocumentPointer.superclass.constructor.call(this, {});
      this.addEvents('change');
      this.addListener('change', this.onChange, this);
      this.document = document;
    },
    replaceWith: function (doc) {
      this.document = doc;
      this.fireEvent('change');
    },
    replaceWithParent: function () {
      this.document = this.document.parentNode;
      this.fireEvent('change');
    },
    appendNewChildWithReplace: function () {
      var new_doc = new Document();
      this.document.appendChild(new_doc);
      this.replaceWith(new_doc);
    },
    appendNewChild: function () {
      this.document.appendChild(new Document());
    },
    destroyDocument: function () {
      var old_doc = this.document;
      this.replaceWithParent();
      old_doc.destroy();
    },
    onChange: function () {
      this.document.select();
      this.document.expand();
    },
    isAppendable: function () {
      return this.document.attributes.appendable;
    },
    isEditable: function () {
      return this.document.attributes.editable;
    },
    isDestroyable: function () {
      return this.document.attributes.destroyable;
    }
  });
});
