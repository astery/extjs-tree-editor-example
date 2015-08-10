define(['extjs', './document_pointer', './document_button_append_child', './document_button_destroy'], function (Ext, DocumentPointer, DocumentButtonAppendChild, DocumentButtonDestroy) {
  return Document = Ext.extend(Ext.tree.TreeNode, {
    constructor: function (attributes) {
      Ext.apply(this.attributes, attributes, {
        title: 'Object 1',
        content: 'Replace with your content'
      });

      Document.superclass.constructor.call(this, attributes);
      this.setText(this.attributes.title);
      this.destroyable = true;
      this.appendable = true;
      this.editable = true;
      this.contextMenu = new Ext.menu.Menu({
        items: [
          new DocumentButtonAppendChild({ document_pointer: new DocumentPointer(this) }),
          new DocumentButtonDestroy({ document_pointer: new DocumentPointer(this) }),
        ]
      });
      this.addListener('contextmenu', this.showMenu, this);
    },
    setTitle: function (title) {
      this.attributes.title = title;
      this.setText(title);
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
    showMenu: function (tree_node, mouse) {
      this.contextMenu.showAt(mouse.xy);
    }
  });
});
