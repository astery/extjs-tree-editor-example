define(['extjs'], function (Ext) {
  return DocumentRoot = Ext.extend(Ext.tree.TreeNode, {
    constructor: function (attributes) {
      DocumentRoot.superclass.constructor.call(this, attributes);
      this.text = 'Root';
      this.expanded = true;
    }
  });
});