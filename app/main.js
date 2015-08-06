define(['extjs', './document'], function (Ext, Document) {
  var doc = new Document({
    title: 'Object 1i'
  });

  var tree_root = new Ext.tree.TreeNode({
    text: 'Root',
    expanded: true
    // children: [{
    //   text: 'Object 1',
    //   icon: '',
    //   children: [{
    //     text: 'Object 1.1',
    //     leaf: true
    //   }, {
    //     text: 'Object 1.2',
    //     leaf: true
    //   }, {
    //     text: 'Object 1.3',
    //     leaf: true
    //   }]
    // }, {
    //   text: 'Object 2',
    //   children: [{
    //     text: 'Object 2.1',
    //     leaf: true
    //   }, {
    //     text: 'Object 2.2',
    //     leaf: true
    //   }, {
    //     text: 'Object 2.3',
    //     leaf: true
    //   }]
    // }, {
    //   text: 'Object 3',
    //   leaf: true
    // }]
  });

  tree_root.appendChild(doc.tree_node);

  var tree = new Ext.tree.TreePanel({
      useArrows: true,
      autoScroll: true,
      animate: true,
      enableDD: true,
      containerScroll: true,
      border: false,
      loader: new Ext.tree.TreeLoader(),
      root: tree_root,
      listeners: {
          click: function(n) {
              Ext.Msg.alert('Navigation Tree Click', 'You clicked: "' + n.attributes.text + '"');
          }
      }
  });

  var form = new Ext.FormPanel({
      width: 360,
      frame: true,
      bodyStyle: 'padding: 5px 5px 0',
      defaults: { width: 230 },
      defaultType: 'textfield',

      items: [{
          fieldLabel: 'Title',
          name: 'title',
          allowBlank: false
        }, new Ext.form.TextArea({
          fieldLabel: 'Content',
          name: 'content'
        })
      ],

      buttons: [{
        text: 'Destroy'
      }, {
        text: 'Add child'
      }, {
        text: 'Save'
      }]
  });

  new Ext.Viewport({
      layout: 'border',
      items: [{
        title: 'Objects tree',
        region:'west',
        width: 300,
        layout: 'fit',
        items: tree
      }, {
        title: 'Object editor',
        region: 'center',
        layout: 'fit',
        items: {
          region: 'west',
          height: 500,
          items: form
        }
      }]
  });
});
