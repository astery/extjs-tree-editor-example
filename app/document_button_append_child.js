define(['extjs', './document_button'], function (Ext, DocumentButton) {
  return DocumentButtonAppendChild = Ext.extend(DocumentButton, {
    constructor: function (config) {
      DocumentButtonAppendChild.superclass.constructor.call(this, config);
      this.setText('Add child');
    },
    isActionCanBePerformed: function () {
      return this.dp.isAppendable();
    },
    doAction: function () {
      this.dp.appendNewChildWithReplace();
    }
  });
});
