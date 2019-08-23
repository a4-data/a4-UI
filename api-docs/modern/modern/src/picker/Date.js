/**
 * @class Ext.picker.Date
 * @extend Ext.picker.Picker
 * @xtype datepicker
 *
 * A date picker component which shows a Date Picker on the screen. This class extends from {@link Ext.picker.Picker}
 * and {@link Ext.Sheet} so it is a popup.
 *
 * This component has no required configurations.
 *
 * ## Examples
 *```HTML
 * @example({tab: 1})
 * <ext-container>
 *     <ext-button ui="action" ontap="date.showPicker" text="Show Picker"></ext-button>
 *     <ext-datepicker
 *         onready="datepickerCmp.datepickerReady"
 *     >
 *     </ext-datepicker>     
 * </ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-datepicker.component';
 *import '@sencha/ext-web-components/dist/ext-button.component'; 
 * 
 *export default class DatePickerComponent {
 *     datepickerReady = (event) => {
 *         this.pickerCmp = event.detail.cmp;
 *     }
 * 
 *     showPicker = () => {
 *         this.pickerCmp.show();
 *     }
 *}
 * window.datepickerCmp = new DatePickerComponent();
 *```
 */
/**
 * @event change
 * Fired when the value of this picker has changed and the done button is pressed.
 * @param {Ext.picker.Date} this This Picker
 * @param {Date} value The date value
 */

/**
 * @cfg {Number} [yearFrom=1980]
 * The start year for the date picker. If {@link #yearFrom} is greater than
 * {@link #yearTo} then the order of years will be reversed.
 * @accessor
 */

/**
 * @cfg {Date} [yearTo=new Date().getFullYear()]
 * The last year for the date picker. If {@link #yearFrom} is greater than
 * {@link #yearTo} then the order of years will be reversed.
 * @accessor
 */

/**
 * @cfg {String} [monthText='Month']
 * The label to show for the month column.
 * @accessor
 */

/**
 * @cfg {String} [dayText='Day']
 * The label to show for the day column.
 * @accessor
 */

/**
 * @cfg {String} [yearText='Year']
 * The label to show for the year column.
 * @accessor
 */

/**
 * @cfg {Array} [slotOrder=['month','day','year']]
 * An array of strings that specifies the order of the slots.
 * @accessor
 */

/**
 * @cfg {Object/Date} value
 * Default value for the field and the internal {@link Ext.picker.Date} component. Accepts an object of 'year',
 * 'month' and 'day' values, all of which should be numbers, or a {@link Date}.
 *
 * Examples:
 *
 * - `{year: 1989, day: 1, month: 5}` = 1st May 1989
 * - `new Date()` = current date
 * @accessor
 */

/**
 * @cfg {Array} slots
 * @hide
 * @accessor
 */

/**
 * @cfg {String/Mixed} [doneButton=true]
 * Can be either:
 *
 * - A {String} text to be used on the Done button.
 * - An {Object} as config for {@link Ext.Button}.
 * - `false` or `null` to hide it.
 * @accessor
 */
