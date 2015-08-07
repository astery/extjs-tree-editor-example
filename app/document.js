define(['extjs'], function (Ext) {
  return Document = Ext.extend(Ext.tree.TreeNode, {
    constructor: function (attributes) {
      Ext.apply(this.attributes, attributes, {
        title: 'Object 1',
        content: 'Replace with your content'
      });

      Document.superclass.constructor.call(this, attributes);
      this.text = this.attributes.title;
      this.destroyable = true;
      this.appendable = true;
      this.editable = true;
    },
    setTitle: function (title) {
      this.attributes.title = title;
    },
    getTitle: function () {
      return this.attributes.title;
    },
    setContent: function (content) {
      this.attributes.content = content;
    },
    getContent: function () {
      return this.attributes.content;
    },
  });
});