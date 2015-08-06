define(['extjs'], function (Ext) {
  return Document = Ext.extend(Object, {
    constructor: function (config) {
      Ext.apply(this, {
        title: 'Object 1',
        content: 'Replace with your content',
      }, config);

      this.tree_node = new Ext.tree.TreeNode({
        text: this.title,
      });
    }
  });
});