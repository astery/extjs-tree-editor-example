define(['extjs'], function (Ext) {
  return DocumentButton = Ext.extend(Ext.Button, {
    constructor: function (config) {
      DocumentButton.superclass.constructor.call(this, config);
      this.dp = config.document_pointer;
      this.dp.addListener('change', this.onDocumentPointerChange, this);
      this.addListener('click', this.onClick, this);
      this.updateState();
    },
    onClick: function () {
      if (this.isActionCanBePerformed()) {
        this.doAction();
        this.updateState();
      }
    },
    onDocumentPointerChange: function () {
      this.updateState();
    },
    isActionCanBePerformed: function () {
      return true;
    },
    updateState: function () {
      if (this.isActionCanBePerformed()) {
        this.enable();
      } else {
        this.disable();
      }
    }
  });
});