define(['extjs', './document', './document_button'], function (Ext, Document, DocumentButton) {
  return DocumentButtonAppendChild = Ext.extend(DocumentButton, {
    constructor: function (config) {
      DocumentButtonAppendChild.superclass.constructor.call(this, config);
      this.setText('Add child');
    },
    isActionCanBePerformed: function () {
      return this.dp.document && this.dp.document.appendable;
    },
    doAction: function () {
      var new_doc = new Document();
      this.dp.document.appendChild(new_doc);
      this.dp.replaceWith(new_doc);
    }
  });
});