/**
 * @class Ext.field.Email
 * @extend Ext.field.Text
 * @xtype emailfield
 *
 * The Email field creates an HTML5 email input and is usually created inside a form.
 * Because it creates an HTML email input field, most browsers will show a specialized
 * virtual keyboard for email address input. Aside from that, the email field is just a
 * normal text field. Here's an example of how to use it in a form:
 *```HTML
 *@example({tab: 1})
 *<ext-container
 *    layout="center"
 *>
 *   <ext-formpanel
 *         shadow="true"
 *    >
 *       <ext-emailfield
 *            width="250"
 *            placeholder="user@domain.com"
 *            label="Email"
 *        >
 *       </ext-emailfield>
 *    </ext-formpanel>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *import '@sencha/ext-web-components/dist/ext-emailfield.component';
 * 
 *export default class EmailFieldComponent {}
 *```
 *
 */
/**
 * Because email field inherits from {@link Ext.field.Text textfield} it gains all of the
 * functionality that text fields provide, including getting and setting the value at
 * runtime, validations and various events that are fired as the user interacts with
 * the component. Check out the {@link Ext.field.Text} docs to see the additional
 * functionality available.
 */

/**
 * @cfg [autoCapitalize=false]
 * @inheritdoc
 */
