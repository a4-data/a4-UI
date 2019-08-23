/**
 * @class Ext.TitleBar
 * @extend Ext.Container
 * @xtype titlebar
 *
 * {@link Ext.TitleBar}'s are most commonly used as a docked item within an {@link Ext.Container}.
 *
 * The main difference between a {@link Ext.TitleBar} and an {@link Ext.Toolbar} is that
 * the {@link #title} prop.
 *
 * You can also give items of a {@link Ext.TitleBar} an `align` prop of `left` or `right`,
 * which will dock them to the `left` or `right` of the bar.
 *```HTML
 *@example({tab: 1})
 *<ext-container>
 *    <ext-titlebar title="App Title" docked="top">
 *        <ext-button align="left" iconCls="x-fa fa-bars"></ext-button>
 *        <ext-button align="right" iconCls="x-fa fa-inbox" text="Inbox"></ext-button>
 *        <ext-button align="right" iconCls="x-fa fa-user" text="Profile"></ext-button>
 *    </ext-titlebar>
 *</ext-container>
 *      
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *
 *import '@sencha/ext-web-components/dist/ext-button.component';
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-titlebar.component';
 * 
 *export default class TitleBarComponent {}
 *   
 *```
 *
/**
 * @cfg cls
 * @inheritdoc
 */

/**
 * @cfg {String} [title=null]
 * The title of the toolbar.
 * @accessor
 */

/**
 * @cfg {String} [titleAlign='center']
 * The alignment for the title of the toolbar.
 * @accessor
 */

/**
 * @cfg {String} [defaultType='button']
 * The default xtype to create.
 * @accessor
 */

/**
 * @cfg {String} [defaultButtonUI=null]
 * A default {@link Ext.Component#ui ui} to use for {@link Ext.Button Button} items.
 */

/**
 * @cfg {String/Number} [minHeight=null]
 * The minimum height height of the Toolbar.
 * @accessor
 */

/**
 * @cfg layout
 * @hide
 */

/**
 * @cfg {Array/Object} [items=[]]
 * The child items to add to this TitleBar. The {@link #defaultType} of
 * a TitleBar is {@link Ext.Button}.
 *
 * You can also give items an `align` prop, which will align the item to the `left` or `right` of
 * the TitleBar.
 * @accessor
 */

/**
 * @cfg {String} [maxButtonWidth='40%']
 * The maximum width of the button by percentage
 * @accessor
 */
