/**
 * @class Ext.field.Date
 * @extend Ext.field.Picker
 * @xtype datepickerfield
 *
 * This is a specialized field which shows a {@link Ext.picker.Date} when tapped. If it
 * has a predefined value, or a value is selected in the {@link Ext.picker.Date}, it will
 * be displayed like a normal {@link Ext.field.Text} (but not selectable/changeable).
 *
 * {@link Ext.field.Date} fields are very simple to implement, and have no
 * required configurations.
 *
 * ## Examples
 *
 * It can be very useful to set a default {@link #value} configuration on
 * {@link Ext.field.Date} fields. In this example, we set the {@link #value} to be
 * the current date. You can also use the {@link #setValue} method to update the value
 * at any time.
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container layout="center">
 *    <ext-formpanel
 *      layout='{"type": "vbox", "align": "stretch"}'
 *      width="300"
 *      height="100"
 *      bodyPadding="10"
 *      shadow="true"
*     >
* <ext-datepickerfield
*  destroyPickerOnHide="true"
*  label="Date"
*  picker='{
*   "yearFrom": "1990"
*  }'
*  onready="datepickerfield.datePickerFieldReady"
* >
* </ext-datepickerfield>
* </ext-formPanel>
* </ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-datepickerfield.component';
 *import '@sencha/ext-web-components/dist/ext-formpanel.component';
 * 
 *export default class DatePickerFieldComponent {
 *    datePickerFieldReady(event) {
 *        this.datepickerfieldView = event.detail.cmp;
 *        this.datepickerfieldView.setValue(new Date());
 *    }
 *}
 *window.datepickerfield = new DatePickerFieldComponent();
 *```
 * 
 */

/**
 * @cfg {Object/Ext.picker.Date} [picker=true]
 * An object that is used when creating the internal {@link Ext.picker.Date} component or
 * a direct instance of {@link Ext.picker.Date}.
 * @accessor
 */

/**
 * @cfg {Object/Date} value
 * Default value for the field and the internal {@link Ext.picker.Date} component. Accepts
 * an object of 'year', 'month' and 'day' values, all of which should be numbers, or
 * a {@link Date}.
 *
 * Example: {year: 1989, day: 1, month: 5} = 1st May 1989 or new Date()
 * @accessor
 */

/**
 * @cfg {Boolean} [destroyPickerOnHide=false]
 * Whether or not to destroy the picker widget on hide. This save memory if it's not used
 * frequently, but increase delay time on the next show due to re-instantiation.
 * @accessor
 */

/**
 * @cfg {String} [dateFormat=Ext.util.Format.defaultDateFormat] The format to be used
 * when displaying the date in this field. Accepts any valid date format. You can view
 * formats over in the {@link Ext.Date} documentation.
 * @accessor
 */

/**
 * @event change
 * Fires when a date is selected
 * @param {Ext.field.Date} this
 * @param {Date} newDate The new date
 * @param {Date} oldDate The old date
 */

/**
 * @method getValue
 * Returns the {@link Date} value of this field.
 * If you wanted a formatted date use the {@link #getFormattedValue} method.
 *
 * @return {Date} The date selected
 */

/**
 * @method getFormattedValue
 * Returns the value of the field formatted using the specified format. If it is not
 * specified, it will default to {@link #dateFormat} and then
 * {@link Ext.util.Format#defaultDateFormat}.
 * @param {String} format The format to be returned.
 * @return {String} The formatted date.
 */
