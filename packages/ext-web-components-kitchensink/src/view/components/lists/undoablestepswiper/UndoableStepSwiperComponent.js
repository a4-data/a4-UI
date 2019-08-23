import './UndoableStepSwiperComponent.html';
Ext.require(['Ext.dataview.listswiper.ListSwiper']);

export default class UndoableStepSwiperComponent {
    constructor() {}

    listReady = (event) => {
        this.listCmp = event.detail.cmp;
        const tpl = `<div>
            <div style="font-size:16px;margin-bottom:5px;">{first_name} {last_name}</div>
            <div style="font-size:12px;color:#666;">{title}</div>
            </div>`;
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'resources/data/people.json'
            },
            sorters: ['last_name', 'first_name']
        });
        const plugins = [{
            type: 'listswiper',
            defaults: {
                ui: 'action'
            },
            widget: {
                xtype: 'listswiperstepper'
            },
            left: [{
                iconCls: 'x-fa fa-phone',
                text: 'Call',
                commit: this.onCall.bind(this)
            }],
            right: [{
                iconCls: 'x-fa fa-envelope',
                ui: 'alt confirm',
                text: 'Message',
                commit: this.onMessage.bind(this)
            }, {
                iconCls: 'x-fa fa-delete',
                text: 'Edit',
                precommit: this.onDeleteItem.bind(this),
                commit: this.onCommitDeleteItem.bind(this),
                revert: this.onUndoDeleteItem.bind(this),
                undoable: true
            }]
        }];
        this.listCmp.setItemTpl(tpl);
        this.listCmp.setStore(this.store);
        this.listCmp.setPlugins(plugins);
    }

    onSelect = (event) => {
        const selected = event.detail.selected.data;
        Ext.toast(`You selected ${selected.first_name} ${selected.last_name}.`);
    }

    onCall = (list, {record}) => {
        Ext.toast(`Call ${record.get('first_name')} ${record.get('last_name')}`);
    }

    onMessage = (list, {record}) => {
        Ext.toast(`Message ${record.get('first_name')} ${record.get('last_name')}`);
    }

    onEdit = (list, {record}) => {
        Ext.toast(`Edit ${record.get('first_name')} ${record.get('last_name')}`);
    }

    onCommitDeleteItem = (list, {record}) => {
        const store = list.getStore();
        Ext.toast(`Commit delete ${record.get('first_name')} ${record.get('last_name')}`);
        store.remove(record);
    }

    onDeleteItem = (list, {record}) => {
        Ext.toast(`Delete ${record.get('first_name')} ${record.get('last_name')}`);
    }

    onUndoDeleteItem(list, {record}) {
        Ext.toast(`Recover ${record.get('first_name')} ${record.get('last_name')}`);
    }
}
