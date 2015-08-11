define(['extjs', './document_button_decl'], function (Ext, DocumentButtonMixin) {
  var Button = Ext.extend(Ext.Button, DocumentButtonMixin);

  return DocumentButton = Ext.extend(Button, {
    constructor: function (config) {
      DocumentButton.superclass.constructor.call(this, config);
      this.setDocumentPointer(config.document_pointer);
    }
  });
});
