import './SelectAndCopyComponent.html';
import createStore from './SelectAndCopyComponentData.js';

Ext.require([ 'Ext.grid.plugin.Clipboard', 'Ext.grid.selection.Replicator']);

export default class SelectAndCopyComponent {
    constructor() {
        this.extensibleOptions = [];

        this.gridSelectable = {
            extensible: 'both',
            rows: true,
            cells: true,
            columns: true,
            drag: true,
            checkbox:true
        };
    }

    onGridReady = (event) => {
        this.gridCmp = event.detail.cmp;
        this.store = createStore();
        this.gridCmp.setStore(this.store);
        this.gridCmp.on('selectionchange', this.onSelectionChange.bind(this));
    }

    infoContainerReady = (event) => {
        this.infoContainerCmp = event.detail.cmp;
    }

    menuItemReady = (event) => {
        this.extensibleOptions.push(event.detail.cmp);
    }

    extensibleMenuReady = (event) => {
        this.extensibleMenuCmp = event.detail.cmp;
        if (Ext.isEdge) {
            this.extensibleMenuCmp.on('activeItemchange', this.onExtensibleChange.bind(this));
        } else {
            this.extensibleMenuCmp.on('click', this.onExtensibleChange.bind(this));
        }
    }

    onSelectableChange = (event) => {
        const currentCheckValue = event.detail.checked;
        this.gridSelectable[event.detail.menucheckitem.getText()] = currentCheckValue;
        this.gridCmp.setSelectable(this.gridSelectable);
    }

    onExtensibleChange = (sender, value) => {
        debugger;
        this.gridSelectable.extensible = value._text;
        this.gridCmp.setSelectable(this.gridSelectable);

        for (let index=0; index < this.extensibleOptions.length; index++) {
            if (this.extensibleOptions[index]._text === value._text) {
                this.extensibleOptions[index].setIconCls('x-font-icon md-icon-check');
            } else {
                this.extensibleOptions[index].setIconCls('');
            }
        }
    }

    onSelectionChange = (grid, records, selecting, selection) => {
        let message = '??',
            firstRowIndex,
            firstColumnIndex,
            lastRowIndex,
            lastColumnIndex;

        if (!selection) {
            message = 'No selection';
        }

        else if (selection.isCells) {
            firstRowIndex = selection.getFirstRowIndex();
            firstColumnIndex = selection.getFirstColumnIndex();
            lastRowIndex = selection.getLastRowIndex();
            lastColumnIndex = selection.getLastColumnIndex();

            message = 'Selected cells: ' + (lastColumnIndex - firstColumnIndex + 1) + 'x' + (lastRowIndex - firstRowIndex + 1) +
              ' at (' + firstColumnIndex + ',' + firstRowIndex + ')';
        }
        else if (selection.isRows) {
            message = 'Selected rows: ' + selection.getCount();
        }
        else if (selection.isColumns) {
            message = 'Selected columns: ' + selection.getCount();
        }

        this.infoContainerCmp.setHtml(message);
    }
}
