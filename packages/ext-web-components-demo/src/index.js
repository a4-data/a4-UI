//import '@sencha/ext-web-components'

//import '@sencha/ext-web-components/lib/ext-carousel.component';
import '@sencha/ext-web-components/lib/ext-renderercell.component';

import '@sencha/ext-web-components/lib/ext-container.component';
import '@sencha/ext-web-components/lib/ext-panel.component';
import '@sencha/ext-web-components/lib/ext-button.component';
import '@sencha/ext-web-components/lib/ext-dataview.component';
import '@sencha/ext-web-components/lib/ext-searchfield.component';
import '@sencha/ext-web-components/lib/ext-treelist.component';
import '@sencha/ext-web-components/lib/ext-tabpanel.component';
import '@sencha/ext-web-components/lib/ext-titlebar.component';
import '@sencha/ext-web-components/lib/ext-toolbar.component';
import '@sencha/ext-web-components/lib/ext-grid.component';
import '@sencha/ext-web-components/lib/ext-column.component';
import '@sencha/ext-web-components/lib/ext-widget.component';

//import CarouselComponent from './view/carousel/CarouselComponent.js';
//import ButtonComponent from './view/button/ButtonComponent.js';
import GridComponent from './view/grid/GridComponent.js';
//import ColumnsComponent from './view/columns/ColumnsComponent.js';

// var globalOne = function(event) {
//   console.log('globalOne')
// }

// function globalOne(event) {
//   console.log('globalOne')
// }



(function () {
    Ext.onReady(function() {
        window.grid = new GridComponent() 
        document.body.innerHTML = window._code['grid']['GridComponent' + '.html']
    });


//   init();

//   function doIt(c) {
//     var n = c.name.indexOf('Component');
//     var o = c.name.substring(0, n).toLowerCase();
//     window[o] = new c()
//     document.body.innerHTML = window._code[o][c.name + '.html']
//   }


//   function init() {
// //    doIt(GridComponent)
// //    doIt(ButtonComponent)
// //    doIt(CarouselComponent)
//         doIt(ColumnsComponent)

//   }

  }());