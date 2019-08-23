import './FilesDragDropComponent.scss';
import './FilesDragDropComponent.html';

export default class FilesDragDropComponent {
    constructor() {}

    iconCls = 'drag-file-icon';
    labelText = 'Drag a file from your computer here.';

    parentReady = (ele) => {
        this.parentRefCmp = ele.detail.cmp.el;
        this.target.setElement(this.parentRefCmp);
        this.parentRefCmp.destroy = this.doDestroy.bind(this);
    }

    onDragEnter = () => {
        this.iconContainerCmp.setCls('drag-file-icon active');
    }

    onDragLeave = () => {
        this.iconContainerCmp.setCls('drag-file-icon');
    }

    fileContainerReady = (event) => {
        this.textContainerCmp = event.detail.cmp.el;
    }

    iconContainerReady = (event) => {
        this.iconContainerCmp = event.detail.cmp.el;
    }

    onDrop = (target, info) => {
        const files = info.files;
        this.iconContainerCmp.setCls('drag-file-icon dropped fa-spin');

        const labelText = files.length > 1 ? `Dropped ${files.length} files.` : `Dropped ${files[0].name}`;
        this.textContainerCmp.setHtml(labelText);

        const comp = this;
        this.timer = setTimeout(function(){
            if(!comp.parentRefCmp.destroyed) {
                comp.iconContainerCmp.setCls('drag-file-icon drag-file-fadeout');
                comp.textContainerCmp.setHtml('Drag a file from your computer here.');
            }
            comp.timer = null;
        }, 2000);
    }

    target = new Ext.drag.Target({
        listeners: {
            dragenter: this.onDragEnter.bind(this),
            dragleave: this.onDragLeave.bind(this),
            drop: this.onDrop.bind(this)
        }
    });

    doDestroy = () => {
        clearInterval(this.timer);
        Ext.destroy(this.target);
    }
}
