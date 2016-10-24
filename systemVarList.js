/**
 * Created by Yan on 2016/7/8.
 */

Ext.define('Admin.view.test.systemVarList', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
        'Ext.ux.ProgressBarPager',
        'Admin.view.test.systemVarModel',
        'Admin.view.test.systemVarStore'
    ],
    xtype: 'sysVarMg',
    viewConfig: {markDirty: false},
    columnLines: true,
    style:"margin:8px",
    selModel: {
        type: 'checkboxmodel'
    },
    multiSelect: false,
    title: '系统变量管理',
    header:false,
    frame: true,
    dockedItems:[
        {
            xtype:"toolbar",
            items:[
                {text:"查询",tooltip:"查询数据",iconCls: "query",handler:"searchSysVarList"},"-",
                {text:"新增",tooltip:"新增数据",iconCls:"add",handler:"addData"},"-",
                {text:"编辑",tooltip:"编辑数据",iconCls:"edit",handler:"editSelData"},"-",
                {text:"删除",tooltip:"批量删除数据",iconCls:"remove",handler:"deleteSelData"}
            ]},
        {
            xtype:"toolbar",
            dock:"bottom",
            ui:"footer",
            items:['->',
                {minWidth:80,text:"保存",iconCls:"save",handler:"onSaveRemoveData"},
                {minWidth:80,text:"确定",iconCls:"ensure",handler:"onEnsureRemoveData"},
                {minWidth:80,text:"关闭",iconCls:"close",handler:"onCloseRemoveData"}
            ]
        }
    ],
    initComponent: function () {
        var store = new Admin.view.test.systemVarStore();
        Ext.apply(this, {
            columns: [{
                text: '系统变量ID',
                draggable:false,//姓名不可拖动
                dataIndex: 'systemVarId',
                width: 200
            },{
                text: "系统变量名称",
                sortable: true,
                dataIndex: 'systemVarName',
                minwidth: 250,
                flex:1
            },{
                text:"是否有效",
                sortable: true,
                dataIndex: 'isValid',
                width: 120,
                renderer:function(value){
                    if(value=='Y'){
                        return '是';
                    }
                    return "否";
                }
            },
            {
                //menuDisabled: true,
                text:'操作',
                sortable: false,
                menuDisabled:true,
                draggable:false,
                width:80,
                xtype: 'actioncolumn',
                align:'center',
                items:[
                    {text: '编辑',iconCls: 'edit',tooltip: '编辑',handler:"editData"},
                    {text: '删除',iconCls: 'remove',tooltip: '删除',handler:"deleteCurrData"}
                ]
            }],
            store:store,
            bbar: {
                xtype: 'pagingtoolbar',
                pageSize: 10,
                store:store,
                displayInfo: true,
                plugins: new Ext.ux.ProgressBarPager()
            }
        });

        this.callParent();
    }

});
