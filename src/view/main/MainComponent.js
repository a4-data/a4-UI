import '../charts/charttoolbar/ChartToolbar.js'
import hljs from 'highlightjs';
import 'highlightjs/styles/atom-one-dark.css';
import './MainComponent.css';
import './MainComponent.html';

Ext.require([
    'Ext.data.TreeStore',
    'Ext.chart.series.Bar',
    'Ext.chart.axis.Numeric',
    'Ext.chart.axis.Category',
    'Ext.data.*', 'Ext.grid.*'
]);

Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'year', 'pantone_value']
});

// var storee = Ext.create('Ext.data.Store', {
//     model: 'User',
//     proxy: {
//         type: 'jsonp',
//         url: 'https://reqres.in/api/products/3'
//     }
// });

// storee.load();

var storeee = Ext.create('Ext.data.Store', {
    model: 'User',
    proxy: {
        type: 'rest',
        url: 'https://reqres.in/api/products/3'
    }
});

storeee.load(function (heck) {
    console.log(heck[0].data.data)
}); //GET /users
// User.load({
//     success: function (user) {
//         console.log('i am here', user)
//         console.log(user.getId()); //outputs 123
//     }
// });
// Ext.define('Person', {
//     extend: 'Ext.data.Model',
//     fields: [{
//         name: 'id',
//         type: 'int',
//         useNull: true
//     }, 'email', 'first', 'last'],
//     validations: [{
//         type: 'length',
//         field: 'email',
//         min: 1
//     }, {
//         type: 'length',
//         field: 'first',
//         min: 1
//     }, {
//         type: 'length',
//         field: 'last',
//         min: 1
//     }]
// });

// var MyApp = function () {
//     return {
//         init: function () {
//             console.log('Init Called******************');
//             var storeys = Ext.create('Ext.data.Store', {
//                 autoLoad: true,
//                 autoSync: true,
//                 // model: 'Person',
//                 proxy: {
//                     type: 'rest',
//                     // url: 'https://reqres.in/api/users',
//                     url: 'https://reqres.in/api/products/3',
//                     reader: {
//                         type: 'json',
//                         rootProperty: 'data'
//                     },
//                     writer: {
//                         type: 'json'
//                     }
//                 },
//                 listeners: {
//                     write: function (storeys, operation) {
//                         console.log('write_________________________');
//                         console.log(operation, 'write_________________________');

//                     }
//                     // write: function (store, operation) {
//                     //     var record = operation.getRecords()[0],
//                     //         name = Ext.String.capitalize(operation.action),
//                     //         verb;


//                     //     if (name == 'Destroy') {
//                     //         record = operation.records[0];
//                     //         verb = 'Destroyed';
//                     //     } else {
//                     //         verb = name + 'd';
//                     //     }
//                     //     Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));

//                     // }
//                 }
//             })
//             // storeys.write();
//             storeys.getId()
//             console.log();
//         }
//     }
// }();
// Ext.onReady(MyApp.init, MyApp);

// Ext.onReady(function () {

//     var store = Ext.create('Ext.data.Store', {
//         autoLoad: true,
//         autoSync: true,
//         model: 'Person',
//         proxy: {
//             type: 'rest',
//             // url: 'https://reqres.in/api/users',
//             url: 'https://reqres.in/api/products/3',
//             reader: {
//                 type: 'json',
//                 root: 'data'
//             },
//             writer: {
//                 type: 'json'
//             }
//         },
//         listeners: {
//             write: function (store, operation) {
//                 var record = operation.getRecords()[0],
//                     name = Ext.String.capitalize(operation.action),
//                     verb;


//                 if (name == 'Destroy') {
//                     record = operation.records[0];
//                     verb = 'Destroyed';
//                 } else {
//                     verb = name + 'd';
//                 }
//                 Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));

//             }
//         }
//     });

//     var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
//         listeners: {
//             cancelEdit: function (rowEditing, context) {
//                 // Canceling editing of a locally added, unsaved record: remove it
//                 if (context.record.phantom) {
//                     store.remove(context.record);
//                 }
//             }
//         }
//     });

//     var grid = Ext.create('Ext.grid.Panel', {
//         renderTo: document.body,
//         plugins: [rowEditing],
//         width: 400,
//         height: 300,
//         frame: true,
//         title: 'Users',
//         store: store,
//         iconCls: 'icon-user',
//         columns: [{
//             text: 'ID',
//             width: 40,
//             sortable: true,
//             dataIndex: 'id'
//         }, {
//             text: 'Email',
//             flex: 1,
//             sortable: true,
//             dataIndex: 'email',
//             field: {
//                 xtype: 'textfield'
//             }
//         }, {
//             header: 'First',
//             width: 80,
//             sortable: true,
//             dataIndex: 'first',
//             field: {
//                 xtype: 'textfield'
//             }
//         }, {
//             text: 'Last',
//             width: 80,
//             sortable: true,
//             dataIndex: 'last',
//             field: {
//                 xtype: 'textfield'
//             }
//         }],
//         dockedItems: [{
//             xtype: 'toolbar',
//             items: [{
//                 text: 'Add',
//                 iconCls: 'icon-add',
//                 handler: function () {
//                     // empty record
//                     store.insert(0, new Person());
//                     rowEditing.startEdit(0, 0);
//                 }
//             }, '-', {
//                 itemId: 'delete',
//                 text: 'Delete',
//                 iconCls: 'icon-delete',
//                 disabled: true,
//                 handler: function () {
//                     var selection = grid.getView().getSelectionModel().getSelection()[0];
//                     if (selection) {
//                         store.remove(selection);
//                     }
//                 }
//             }]
//         }]
//     });
//     grid.getSelectionModel().on('selectionchange', function (selModel, selections) {
//         grid.down('#delete').setDisabled(selections.length === 0);
//     });
// });


export default class MainComponent {
    constructor() {

        var navTreeRoot = {
            hash: 'all',
            iconCls: 'x-fa fa-home',
            leaf: false,
            text: 'All',
            children: window.menu
        };
        this.treeStore = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: navTreeRoot
        });

        this.navTreeView = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: navTreeRoot
        });

        this.wait = 5;

        if (Ext.os.is.Phone) {
            this.collapsed = true;
        }

        this.storey = Ext.create('Ext.data.Store', {
            fields: ['country', 'agr', 'ind', 'ser'],
            data: [
                { country: 'USA', agr: 188217, ind: 2995787, ser: 12500746 },
                { country: 'China', agr: 918138, ind: 3611671, ser: 3792665 },
                { country: 'Japan', agr: 71568, ind: 1640091, ser: 4258274 },
                { country: 'UK', agr: 17084, ind: 512506, ser: 1910915 },
                { country: 'Russia', agr: 78856, ind: 727906, ser: 1215198 }
            ]
        });
    }

    tabpanelReady = (event) => {
        this.tabpanelCmp = event.detail.cmp;
        this.tabpanelCmp.setTabBar({ layout: { pack: 'left' } });
    }

    onAxisLabelRender = (axis, label, layoutContext) => {
        return Ext.util.Format.number(layoutContext.renderer(label) / 1000, '0,000');
    }
    onSeriesLabelRender = (value) => {
        return Ext.util.Format.number(value / 1000, '0,000');
    }

    cartesianReady = (event) => {
        this.cartesianCmp = event.detail.cmp;
        this.cartesianCmp.setStore(this.storey);
        //  this.cartesianCmp.setTheme(this.theme);
        this.cartesianCmp.setAxes([
            {
                type: 'numeric',
                position: 'bottom',
                fields: 'ind',
                grid: true,
                maximum: 4000000,
                majorTickSteps: 10,
                title: 'Billions of USD',
                renderer: this.onAxisLabelRender.bind(this)
            },
            {
                type: 'category',
                position: 'left',
                fields: 'country',
                grid: true
            }]);
        this.cartesianCmp.setSeries([{
            type: 'bar',
            xField: 'country',
            yField: 'ind',
            style: {
                opacity: 0.80,
                minGapWidth: 10
            },
            label: {
                field: 'ind',
                display: 'insideEnd',
                renderer: this.onSeriesLabelRender.bind(this),
            }
        }]);
        this.cartesianCmp.setCaptions({
            title: {
                text: 'Sample Bar Graph',
            },
            // subtitle: {
            //     text: 'Source: http://en.wikipedia.org/wiki/List_of_countries_by_GDP_sector_composition',
            // }
        });
    }

    onListReady = (event) => {
        this.listCmp = event.detail.cmp;
        const tpl =
            `<div>
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

        this.listCmp.setItemTpl(tpl);
        this.listCmp.setStore(this.store);
    }


    readyRightContainer = (event) => {
        this.rightContainerCmp = event.detail.cmp;
        this.rightContainerCmp.updateHtml(`
        <div ">
        <i class="fas fa-user"></i>  <p>Profile</p>
        </div>
        `); // eslint-disable-line no-undef
    }

    afterAllLoaded = () => {
        this.wait = this.wait - 1;

        if (this.wait == 0) {
            var hash = window.location.hash.substr(1);
            if (hash == '') { hash = 'all'; }
            var node = this.navTreelistCmp.getStore().findNode('hash', hash);
            this.navTreelistCmp.setSelection(node);
            this.navigate(node);
        }
    }

    readyCodeButton = (event) => {
        this.codeButtonCmp = event.detail.cmp;
    }

    readyDataviewBreadcrumb = (event) => {
        this.dataviewBreadcrumbCmp = event.detail.cmp;
        this.dataviewBreadcrumbCmp.setStore(this.treeStore);
        this.afterAllLoaded('readyDataviewBreadcrumb');
    }

    readyNavTreePanel = (event) => {
        this.navTreePanelCmp = event.detail.cmp;

        if (Ext.os.is.Phone) {
            this.navTreePanelCmp.setWidth('100%');
        }
    }

    readyNavTreelist = (event) => {
        this.navTreelistCmp = event.detail.cmp;
        this.navTreelistCmp.setStore(this.navTreeView);
        this.afterAllLoaded('readyNavTreelist');
    }

    readySelection = (event) => {
        this.selectionCmp = event.detail.cmp;
        var bodyStyle = `
            backgroundSize: 20px 20px;
            borderWidth: 0px;
            backgroundColor: #e8e8e8;
            backgroundImage:
            linear-gradient(0deg, #f5f5f5 1.1px, transparent 0),
            linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)
        `;
        this.selectionCmp.setBodyStyle(bodyStyle);
    }

    readyDataviewNav = (event) => {
        this.dataviewNavCmp = event.detail.cmp;
        this.dataviewNavCmp.setStyle({ 'background': 'top', 'display': 'block', 'text-align': 'center' });

        if (Ext.os.is.Phone) {
            this.dataviewNavCmp.setCentered(false);
        }

        var tpl = `
            <div class="app-thumbnail">
              <div class="app-thumbnail-icon-wrap">
                <div class="app-thumbnail-icon {iconCls}"></div>
              </div>
              <div class="app-thumbnail-text">{text}</div>
              <div class="{premiumClass}"></div>
            </div>
        `;
        this.dataviewNavCmp.setItemTpl(tpl);
        this.dataviewNavCmp.setStore(this.treeStore);
        this.afterAllLoaded('readyDataviewNav');
    }

    readyRouter = (event) => {
        this.router = event.target;
        this.afterAllLoaded('readyRouter');
    }

    readyCodePanel = (event) => {
        this.codePanelCmp = event.detail.cmp;
    }

    readyTabPanel = (event) => {
        this.tabPanelCmp = event.detail.cmp;
        this.afterAllLoaded('readyTabPanel');
    }

    dataviewBreadcrumbClick = (event) => {
        this.navigate(event.detail.node);
    }

    dataviewNavClick = (event) => {
        var record = event.detail.location.record;
        this.navigate(record);
    }

    navTreelistSelectionChange = (event) => {
        var record = event.detail.record;
        this.navigate(record);
    }

    navigate = (record) => {
        if (record == null) {
            return;
        }

        var hash = record.data.hash;
        var childNum = record.childNodes.length;
        var node = this.dataviewNavCmp.getStore().findNode('hash', hash);
        this.dataviewBreadcrumbCmp.setSelection(node);

        if (childNum == 0 && hash != undefined) {
            window.location.hash = '#' + hash;
            this.showRouter();
        }
        else {
            this.dataviewNavCmp.setData(node.childNodes);
            this.showSelection();
        }

        if (Ext.os.is.Phone) {
            this.navTreePanelCmp.setCollapsed(true);
        }
    }

    showSelection = () => {
        this.selectionCmp.setHidden(false);
        this.router.hidden = true;
        this.codeButtonCmp.setHidden(true);
    }

    showRouter = () => {
        this.selectionCmp.setHidden(true);
        this.router.hidden = false;
        this.codeButtonCmp.setHidden(false);

        if (Ext.os.is.Phone) {
            this.navTreePanelCmp.setCollapsed(true);
        }

        this.setCodeTabs();
    }

    doClickToolbar = () => {
        var collapsed = this.navTreePanelCmp.getCollapsed();
        if (collapsed == true) { collapsed = false; } else { collapsed = true; }
        this.navTreePanelCmp.setCollapsed(collapsed);
    }

    containsMatches = (node) => {
        const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
        if (found) node.expand();
        node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>');
        return found;
    }

    filterNav = (event) => {
        var value = event.detail.newValue;
        this.filterRegex = new RegExp(`(${Ext.String.escapeRegex(value)})`, 'i');
        this.navTreelistCmp.getStore().filterBy(record => this.containsMatches(record));
    }

    toggleCode = () => {
        var collapsed = this.codePanelCmp.getHidden();
        if (collapsed == true) { collapsed = false; }
        else { collapsed = true; }
        this.codePanelCmp.setHidden(collapsed);
    }

    toggleTree = () => {
        let collapsed = this.navTreePanelCmp.getCollapsed();

        if (collapsed == true) {
            collapsed = false;
        } else {
            collapsed = true;
        }
        this.navTreePanelCmp.setCollapsed(collapsed);
    }

    setCodeTabs = () => {
        var hash = window.location.hash.substr(1);
        var currentRoute = {};
        window.routes.forEach((route) => {
            if (hash == '') {
                if (route.default == true) { currentRoute = route; }
            }
            else {
                if (route.hash == hash) { currentRoute = route; }
            }
        });

        var codeMap = window._code[currentRoute.hashlower];
        this.tabPanelCmp.removeAll();
        var componentName = currentRoute.hash + 'Component';

        this.setTab(codeMap, componentName + '.html');
        this.setTab(codeMap, componentName + '.js');
        this.setTab(codeMap, componentName + '.scss');
        this.setTab(codeMap, componentName + '.css');
        this.setTab(codeMap, componentName + 'Data.js');
        this.setTab(codeMap, componentName + 'Dummy.js');
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }

    setTab = (codeMap, file) => {
        var codeMapFile = codeMap[file];
        if (codeMapFile != undefined) {
            this.tabPanelCmp.add(
                {
                    xtype: 'panel', title: file, ui: 'code-panel', layout: 'fit', userSelectable: true, scrollable: true,
                    tab: { ui: 'app-code-tab', flex: 0, padding: '0 5 0 0', minWidth: 220, maxWidth: 250 },
                    html: `<pre><code class='code'>${codeMapFile.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
                }
            );
        }
    }
}
