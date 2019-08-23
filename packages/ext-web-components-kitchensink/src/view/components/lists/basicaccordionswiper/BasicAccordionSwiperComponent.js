import './BasicAccordionSwiperComponent.html';
Ext.require(['Ext.dataview.listswiper.ListSwiper']);

export default class BasicAccordionSwiperComponent {
    constructor() {}

    onListReady = (event) => {
        this.listCmp = event.detail.cmp;
        const tpl =`<div>
                <div style={{fontSize: '16px', marginBottom: '5px'}}>{first_name} {last_name}</div>
                <div style={{fontSize: '12px', color: '#666'}}>{title}</div>
              </div>`;
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            sorters: ['last_name', 'first_name'],
            proxy: {
                type: 'rest',
                url: 'resources/data/people.json'
            }
        });
        const plugins=[{
            type: 'listswiper',
            defaults: {ui: 'action'},
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
                iconCls: 'x-fa fa-edit',
                text: 'Edit',
                commit: this.onEdit.bind(this)
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

    onCall = (list, info) => {
        const record = info.record;
        Ext.toast(`Call ${record.get('first_name')} ${record.get('last_name')}`);
    }

    onMessage = (list, info) => {
        const record = info.record;
        Ext.toast(`Message ${record.get('first_name')} ${record.get('last_name')}`);
    }

    onEdit = (list, info) => {
        const record = info.record;
        Ext.toast(`Edit ${record.get('first_name')} ${record.get('last_name')}`);
    }
}
