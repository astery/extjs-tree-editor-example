define(['extjs', './document_button'], function (Ext, DocumentButton) {
  return DocumentButtonDestroy = Ext.extend(DocumentButton, {
    constructor: function (config) {
      DocumentButtonDestroy.superclass.constructor.call(this, config);
      this.setText('Destroy');
    },
    isActionCanBePerformed: function () {
      return this.dp.document && this.dp.document.destroyable;
    },
    doAction: function () {
      var old_doc = this.dp.document;
      this.dp.replaceWithParent();
      old_doc.destroy();
    }
  });
});