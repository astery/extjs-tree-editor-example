define(['extjs'], function (Ext) {
  return DocumentForm = Ext.extend(Ext.FormPanel, {
    constructor: function (config) {
      this.title_field = new Ext.form.TextField({
        fieldLabel: 'Title',
        name: 'title',
        allowBlank: false
      });
      this.content_field = new Ext.form.TextArea({
        fieldLabel: 'Content',
        name: 'content'
      });
      this.button_save = new Ext.Button({ text: 'Save' });

      config = Ext.apply({
        width: 360,
        frame: true,
        bodyStyle: 'padding: 5px 5px 0',
        defaults: { width: 230 },
        items: [this.title_field, this.content_field],
        buttons: []
      }, config);

      config.buttons.push(this.button_save);

      DocumentForm.superclass.constructor.call(this, config);
      this.dp = config.document_pointer;
      this.dp.addListener('change', this.onDocumentPointerChange, this);
      this.button_save.addListener('click', this.onSaveClick, this);
      this.updateState();
    },
    onSaveClick: function () {
      if (this.isActionCanBePerformed()) {
        this.dp.document.setTitle(this.title_field.getValue());
        this.dp.document.setContent(this.content_field.getValue());
        this.updateState();
      }
    },
    onDocumentPointerChange: function () {
      this.updateState();
    },
    isActionCanBePerformed: function () {
      return this.dp.document && this.dp.document.editable;
    },
    updateState: function () {
      if (this.isActionCanBePerformed()) {
        this.title_field.enable();
        this.content_field.enable();
      } else {
        this.title_field.disable();
        this.content_field.disable();
      }

      this.title_field.setValue(this.dp.document.getTitle());
      this.content_field.setValue(this.dp.document.getContent());
    }
  });
});