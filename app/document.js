define(['extjs'], function (Ext) {
  return Document = Ext.extend(Ext.tree.TreeNode, {
    constructor: function (attributes) {
      Ext.apply(this.attributes, attributes, {
        title: 'Object 1',
        content: 'Replace with your content'
      });

      Document.superclass.constructor.call(this, attributes);
      this.text = this.attributes.title;
    }
  });
});