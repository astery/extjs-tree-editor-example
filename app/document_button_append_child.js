define(['extjs', './document_button'], function (Ext, DocumentButton) {
  return DocumentButtonAppendChild = Ext.extend(DocumentButton, {
    constructor: function (config) {
      DocumentButtonAppendChild.superclass.constructor.call(this, config);
      this.setText('Add child');
    },
    isActionCanBePerformed: function () {
      return this.dp.document && this.dp.document.appendable;
    },
    doAction: function () {
      require(['app/document'], function (Document) {
        var new_doc = new Document();
        this.dp.document.appendChild(new_doc);
        this.dp.replaceWith(new_doc);
      }.bind(this));
    }
  });
});
