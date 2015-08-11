define(['extjs', './document_button'], function (Ext, DocumentButton) {
  return DocumentButtonDestroy = Ext.extend(DocumentButton, {
    constructor: function (config) {
      DocumentButtonDestroy.superclass.constructor.call(this, config);
      this.setText('Destroy');
    },
    isActionCanBePerformed: function () {
      return this.dp.isDestroyable();
    },
    doAction: function () {
      this.dp.destroyDocument();
    }
  });
});
