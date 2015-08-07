define(['extjs', './document'], function (Ext, Document) {
  return DocumentRoot = Ext.extend(Document, {
    constructor: function (attributes) {
      DocumentRoot.superclass.constructor.call(this, attributes);
      this.text = 'Root';
      this.expanded = true;
      this.attributes = { title: 'Root' };
      this.destroyable = false;
      this.appendable = true;
      this.editable = false;
    }
  });
});