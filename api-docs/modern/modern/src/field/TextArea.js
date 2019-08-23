/**
 * @class Ext.field.TextArea
 * @extend Ext.field.Text
 * @xtype textarea
 *
 * Creates an HTML textarea field on the page. This is useful whenever you need the user
 * to enter large amounts of text (i.e. more than a few words). Typically, text entry on
 * mobile devices is not a pleasant experience for the user so it's good to limit your use
 * of text areas to only those occasions when free form text is required or alternative
 * input methods like select boxes or radio buttons are not possible. Text Areas are
 * usually created inside forms, like this:
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container layout="center">
 *    <ext-formpanel shadow="true">
 *        <ext-textareafield
 *            label="Description"
 *            width="300"
 *            maxRows="10"
 *        >
 *        </ext-textareafield>
 *    </ext-formpanel>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *import '@sencha/ext-web-components/dist/ext-textareafield.component';
 *
 *export default class TextAreaFieldComponent {}
 *```
 */

/**
 * @cfg {Boolean} [autoCapitalize=false]
 * @inheritdoc
 */

/**
 * @cfg {Number} [maxRows=null]
 * The maximum number of lines made visible by the input.
 * @accessor
 */
