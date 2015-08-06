require.config({
  paths: {
    extjs: '//cdn.sencha.com/ext/gpl/3.4.1.1/ext-all',
    'ext-base': '//cdn.sencha.com/ext/gpl/3.4.1.1/adapter/ext/ext-base'
  },
  shim: {
    extjs: {
      deps: ['ext-base'],
      exports: 'Ext'
    }
  }
});

require(['app/main']);