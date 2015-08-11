define(['extjs', './document'], function (Ext, Document) {
  return DocumentRoot = Ext.extend(Document, {
    constructor: function (attributes) {
      attributes = attributes || {};
      Ext.applyIf(attributes, { 
        title: 'Root',
        destroyable: false,
        appendable: true,
        editable: false
      });

      DocumentRoot.superclass.constructor.call(this, attributes);

      this.expanded = true;
    }
  });
});
