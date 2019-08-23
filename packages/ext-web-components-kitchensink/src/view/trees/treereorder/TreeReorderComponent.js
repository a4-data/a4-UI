import './TreeReorderComponent.html';

Ext.require([ 'Ext.grid.plugin.TreeDragDrop']);

export default class TreeComponent {
    onTreeReady = (event) => {
        this.treeCmp = event.detail.cmp;

        this.treeStore = Ext.create('Ext.data.TreeStore', {
            type: 'tree',
            rootVisible: true,
            sorters: [{
                property: 'text',
                direction: 'ASC'
            }],
            root: {
                text: 'Products',
                expanded: true
            },
            proxy: {
                type: 'ajax',
                url: 'resources/data/tree/cars.json'
            },
        });
        this.treeCmp.setStore(this.treeStore);
    }

    toolbarReady = (event) => {
        this.toolbar = event.detail.cmp;
    }

    onExpandAllClick = () => {
        this.treeCmp.mask({
            xtype: 'loadmask',
            message: 'Expanding tree...'
        });

        this.toolbar.disable();

        this.treeCmp.expandAll(() => {
            this.treeCmp.unmask();
            this.toolbar.enable();
        });
    }

    onCollapseAllClick = () => {
        this.toolbar.disable();

        this.treeCmp.collapseAll(() => {
            this.toolbar.enable();
        });
    }

    onResetClick = () => {
        this.treeStore.reload();
    }
}
