require.config({
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    extjs: '//cdn.sencha.com/ext/gpl/3.4.1.1/ext-all-debug',
    'ext-base': '//cdn.sencha.com/ext/gpl/3.4.1.1/adapter/ext/ext-base-debug'
  },
  shim: {
    extjs: {
      deps: ['ext-base'],
      exports: 'Ext'
    }
  }
});

require(['app/main']);
