/**
 * @class Ext.field.Url
 * @extend Ext.field.Text
 * @xtype urlfield
 *
 * The Url field creates an HTML5 url input and is usually created inside a form. Because it creates an HTML url input
 * field, most browsers will show a specialized virtual keyboard for web address input. Aside from that, the url field
 * is just a normal text field. Here's an example of how to use it in a form:
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container layout="center">
 *    <ext-formpanel shadow="true">
 *        <ext-urlfield placeholder="http://www.domain.com" label="URL" width="200"></ext-urlfield>
 *    </ext-formpanel>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *import '@sencha/ext-web-components/dist/ext-urlfield.component';
 *
 *export default class URLFieldComponent {}
 *```
 *
 * Because url field inherits from {@link Ext.field.Text textfield} it gains all of the functionality that text fields
 * provide, including getting and setting the value at runtime, validations and various events that are fired as the
 * user interacts with the component. Check out the {@link Ext.field.Text} docs to see the additional functionality
 * available.
 */

/**
 * @cfg [autoCapitalize=false]
 * @inheritdoc
 */
