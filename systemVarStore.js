/**
 * Created by Yan on 2016/7/8.
 */

Ext.define('Admin.view.test.systemVarStore', {
    extend: 'Ext.data.Store',
    alias: 'store.systemVarStore',
    model: 'Admin.view.test.systemVarModel',
    autoLoad: true,
    pageSize: 10,
     proxy: {
     type: 'ajax',
     url : 'D:/EXT-6-TSMBA-2/templates/admin-dashboard/classic/src/view/test/systemVar.json',
     reader: {
     type: 'json',
     totalProperty: 'total',
     rootProperty: 'root'
     }
     }
});
