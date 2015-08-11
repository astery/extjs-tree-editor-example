define(['extjs', './document_button'], function (Ext, DocumentButton) {
  var isEditable = function () {
    return this.dp.isEditable();
  }

  TitleField = Ext.extend(Ext.form.TextField, {
    constructor: function (config) {
      config = Ext.apply({
        fieldLabel: 'Title',
        name: 'title',
        allowBlank: false
      }, config);
      TitleField.superclass.constructor.call(this, config);
      this.dp = config.document_pointer;
    },
    saveValue: function () {
      this.dp.document.setTitle(this.getValue());
    },
    updateValue: function () {
      this.setValue(this.dp.document.getTitle());
    }
  })

  ContentField = Ext.extend(Ext.form.TextArea, {
    constructor: function (config) {
      config = Ext.apply({
        fieldLabel: 'Content',
        name: 'content'
      }, config);
      TitleField.superclass.constructor.call(this, config);
      this.dp = config.document_pointer;
    },
    saveValue: function () {
      this.dp.document.setContent(this.getValue());
    },
    updateValue: function () {
      this.setValue(this.dp.document.getContent());
    }
  })

  ButtonSave = Ext.extend(DocumentButton, {
    constructor: function (config) {
      ButtonSave.superclass.constructor.call(this, config);
      this.setText('Save');
      this.fields = config.fields;
    },
    isActionCanBePerformed: isEditable,
    doAction: function () {
      this.fields.forEach(function (field) {
        field.saveValue();
      });
    }
  });

  return DocumentForm = Ext.extend(Ext.FormPanel, {
    constructor: function (config) {
      this.dp = config.document_pointer;
      this.dp.addListener('change', this.onDocumentPointerChange, this);

      this.title_field = new TitleField({ document_pointer: this.dp });
      this.content_field = new ContentField({ document_pointer: this.dp });
      this.fields = [this.title_field, this.content_field];

      this.button_save = new ButtonSave({ document_pointer: this.dp, fields: this.fields });

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
      this.button_save.addListener('click', this.onSaveClick, this);
      this.updateState();
    },
    onDocumentPointerChange: function () {
      this.updateState();
    },
    isActionCanBePerformed: isEditable,
    updateState: function () {
      if (this.isActionCanBePerformed()) {
        this.everyFieldDo('enable');
        this.button_save.enable();
      } else {
        this.everyFieldDo('disable');
        this.button_save.disable();
      }

      this.everyFieldDo('updateValue');
    },
    everyFieldDo: function (function_name) {
      this.fields.forEach(function (field) {
        field[function_name]();
      });
    }
  });
});
