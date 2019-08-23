import './CalendarPanelComponent.html';
import '../data/calendarFull.js';

export default class CalendarPanelComponent {
    constructor() {}

    onReady = (event) => {
        const store = Ext.create('Ext.calendar.store.Calendars', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/CalendarFull'
            }
        });
        this.calendarPanelCmp = event.detail.cmp;
        this.calendarPanelCmp.setStore(store);
    }
}
