define(['extjs', './document', './document_root', './document_button_destroy', './document_button_append_child', './document_pointer', './document_form'],
function (Ext, Document, DocumentRoot, DocumentButtonDestroy, DocumentButtonAppendChild, DocumentPointer, DocumentForm) {
  var root = new DocumentRoot();
  var doc1 = new Document({ title: 'Object 1' });
  var doc2 = new Document({ title: 'Object 2' });
  var doc11 = new Document({ title: 'Object 1.1' });
  root.appendChild(doc1);
  root.appendChild(doc2);
  doc1.appendChild(doc11);

  var current_document = new DocumentPointer(doc11);

  var tree = new Ext.tree.TreePanel({
    root: root,
    listeners: {
      click: function(document) {
        current_document.replaceWith(document);
      }
    }
  });

  var button_destroy = new DocumentButtonDestroy({ document_pointer: current_document });
  var button_append_child = new DocumentButtonAppendChild({ document_pointer: current_document });
  var form = new DocumentForm({ document_pointer: current_document, buttons: [button_destroy, button_append_child] });

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
