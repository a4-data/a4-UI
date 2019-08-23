import 'highlightjs/styles/atom-one-dark.css';
import './MainComponent.html';
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
        this.wait = 3;
    }

    afterAllLoaded = () => {
        this.wait = this.wait - 1;
    }

    readyNavTreePanel = (event) => {
        this.navTreePanelCmp = event.detail.cmp;
        this.afterAllLoaded('readyNavTreePanel');

        if(Ext.os.is.Phone) {
            this.navTreePanelCmp.setCollapsed(true);
        } else {
            this.navTreePanelCmp.setCollapsed(false);
        }
    }

    readyNavTreelist = (event) => {
        this.navTreelistCmp = event.detail.cmp;
        this.navTreelistCmp.setStore(this.treeStore);
        this.afterAllLoaded('readyNavTreelist');
    }

    readyRouter = (event) => {
        this.router = event.target;
        this.afterAllLoaded('readyRouter');
    }

    navTreelistSelectionChange = (event) => {
        var record = event.detail.record;
        this.navigate(record);
    }

    navigate = (record) => {
        if (record == null) {
            console.log('it was null');
            return;
        }
        var hash = record.data.hash;
        var childNum = record.childNodes.length;
        if (childNum == 0 && hash != undefined) {
            window.location.hash = '#' + hash;
        }
        
        if(Ext.os.is.Phone) {
            var collapsed = this.navTreePanelCmp.getCollapsed();
            if (collapsed == true){collapsed = false;} else{collapsed = true;}
            this.navTreePanelCmp.setCollapsed(collapsed);
        }
    }

    containsMatches = (node) => {
        const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
        if (found) node.expand();
        node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>');
        return found;
    }

    toggleTree = () => {
        var collapsed = this.navTreePanelCmp.getCollapsed();
        if (collapsed == true){collapsed = false;} else{collapsed = true;}
        this.navTreePanelCmp.setCollapsed(collapsed);
    }

    toggleButtonReady = (event) => {
        const navButton = event.detail.cmp;

        if (Ext.os.is.Phone) {
            navButton.setHidden(false);
        } else {
            navButton.setHidden(true);
        }
    }
}
