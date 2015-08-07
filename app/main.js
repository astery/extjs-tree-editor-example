define(['extjs', './document', './document_root'], function (Ext, Document, DocumentRoot) {
  var root = new DocumentRoot();
  var doc1 = new Document({ title: 'Object 1' });
  var doc2 = new Document({ title: 'Object 2' });
  var doc11 = new Document({ title: 'Object 1.1' });
  root.appendChild(doc1);
  root.appendChild(doc2);
  doc1.appendChild(doc11);

  var tree = new Ext.tree.TreePanel({
      root: root,
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
