define(['extjs'], function (Ext) {
  return DocumentTree = Ext.extend(Ext.tree.TreePanel, {
    constructor: function (config) {
      DocumentTree.superclass.constructor.call(this, config);
      this.dp = config.document_pointer;
      this.addListener('click', this.onClick, this);
    },
    onClick: function (document) {
      this.dp.replaceWith(document);
    }
  });
});