/**
 * @class Ext.form.FieldSet
 * @extend Ext.Container
 * @alias widget.fieldset
 *
 * A FieldSet is a great way to visually separate elements of a form. It's normally used when you have a form with
 * fields that can be divided into groups - for example a customer's billing details in one fieldset and their shipping
 * address in another. A fieldset can be used inside a form or on its own elsewhere in your app. Fieldsets can
 * optionally have a title at the top and instructions at the bottom. Here's how we might create a FieldSet inside a
 * form:
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container layout="center">
 *    <ext-formpanel shadow="true">
 *        <ext-fieldset title="About You" instructions="Tell us about yourself." width="300">
 *            <ext-textfield label="First Name" labelAlign="placeholder"></ext-textfield>
 *            <ext-textfield label="Last Name" labelAlign="placeholder"></ext-textfield>
 *        </ext-fieldset>
 *    </ext-formpanel>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *import '@sencha/ext-web-components/dist/ext-fieldset.component';
 *import '@sencha/ext-web-components/dist/ext-textfield.component';
 *
 *export default class FieldSetComponent {}
 *```
 *
 * Above we created a {@link Ext.form.Panel form} with a fieldset that contains two text fields. In this case, all
 * of the form fields are in the same fieldset, but for longer forms we may choose to use multiple fieldsets. We also
 * configured a {@link #title} and {@link #instructions} to give the user more information on filling out the form if
 * required.
 */

/**
 * @cfg {String} [title=null]
 * Optional fieldset title, rendered just above the grouped fields.
 *
 * @accessor
 */

/**
 * @cfg {String} [instructions=null]
 * Optional fieldset instructions, rendered just below the grouped fields.
 *
 * @accessor
 */
