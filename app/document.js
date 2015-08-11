define(['extjs', './document_pointer', './document_button_decl', './document_button_append_child', './document_button_destroy'], function (Ext, DocumentPointer, DocumentButtonMixin, DocumentButtonAppendChild, DocumentButtonDestroy) {
  var MenuItem = Ext.extend(Ext.menu.Item, DocumentButtonMixin);

  var MenuItemAppendChild = Ext.extend(MenuItem, {
    constructor: function (config) {
      MenuItemAppendChild.superclass.constructor.call(this, config);
      this.setDocumentPointer(config.document_pointer);
      this.setText('Add child');
    },
    isActionCanBePerformed: function () {
      return this.dp.isAppendable();
    },
    doAction: function () {
      this.dp.appendNewChild();
      this.parentMenu.hide();
    }
  });

  MenuItemDestroy = Ext.extend(MenuItem, {
    constructor: function (config) {
      MenuItemDestroy.superclass.constructor.call(this, config);
      this.setDocumentPointer(config.document_pointer);
      this.setText('Destroy');
    },
    isActionCanBePerformed: function () {
      return this.dp.isDestroyable();
    },
    doAction: function () {
      this.dp.destroyDocument();
      this.parentMenu.hide();
    }
  });

  return Document = Ext.extend(Ext.tree.TreeNode, {
    constructor: function (attributes) {
      attributes = attributes || {};
      Ext.applyIf(attributes, {
        title: 'Object 1',
        content: 'Replace with your content',
        destroyable: true,
        appendable: true,
        editable: true
      });

      Document.superclass.constructor.call(this, attributes);
      this.setText(this.attributes.title);

      this.contextMenu = new Ext.menu.Menu({
        items: [
          new MenuItemAppendChild({ document_pointer: new DocumentPointer(this) }),
          new MenuItemDestroy({ document_pointer: new DocumentPointer(this) }),
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
