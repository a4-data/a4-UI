import './ConfiguratorPluginComponent.html';
import { generateData } from '../generateSaleData';
import saleModel from '../saleModel';

export default class ConfiguratorPluginComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            model: saleModel,
            data: generateData()
        });
        this.pivotgridMatrix = {
            type: 'local',
            store: this.store,
            aggregate: [{
                dataIndex: 'value',
                header: 'Value',
                aggregator: 'avg',
                width: 120
            }],
            leftAxis: [{
                dataIndex: 'person',
                header: 'Person',
                width: 120
            }, {
                dataIndex: 'company',
                header: 'Company',
                sortable: false
            }],
            topAxis: [{
                dataIndex: 'year',
                header: 'Year',
                labelRenderer: value => `Year ${value}`
            }]
        };
        this.pivotgridPlugins = [{
            type: 'pivotconfigurator',
            fields: [{
                dataIndex: 'quantity',
                header: 'Qty',
                aggregator: 'min',
                formatter: 'number("0")',
                settings: {
                    allowed: ['aggregate'],
                    style: {
                        fontWeight: 'bold'
                    },
                    formatters: {
                        '0': 'number("0")',
                        '0%': 'number("0%")'
                    }
                }
            }, {
                dataIndex: 'value',
                header: 'Value',
                settings: {
                    allowed: 'aggregate',
                    aggregators: ['sum', 'avg', 'count'],
                    style: {
                        fontWeight: 'bold'
                    },
                    renderers: {
                        'Colored 0,000.00': this.coloredRenderer.bind(this)
                    },
                    formatters: {
                        '0': 'number("0")',
                        '0.00': 'number("0.00")',
                        '0,000.00': 'number("0,000.00")',
                        '0%': 'number("0%")',
                        '0.00%': 'number("0.00%")'
                    }
                }
            }, {
                dataIndex: 'company',
                header: 'Company',
                settings: {
                    aggregators: ['count']
                }
            }, {
                dataIndex: 'country',
                header: 'Country',
                settings: {
                    aggregators: ['count']
                }
            }, {
                dataIndex: 'person',
                header: 'Person',
                settings: {
                    aggregators: 'count'
                }
            }, {
                dataIndex: 'year',
                header: 'Year',
                settings: {
                    fixed: ['topAxis']
                }
            }, {
                dataIndex: 'month',
                header: 'Month',
                labelRenderer: this.monthRenderer.bind(this),
                settings: {
                    aggregators: ['count'],
                    allowed: ['leftAxis', 'topAxis']
                }
            }]
        }];
    }

    monthRenderer(value) {return Ext.Date.monthNames[value];}

    coloredRenderer = (value, record, dataIndex, cell) => {
        cell.setStyle(Ext.String.format('color: {0};', value > 500 ? 'green' : 'red'));
        return Ext.util.Format.number(value, '0,000.00');
    }

    onPivotGridReady = (event) => {
        this.pivotgridCmp = event.detail.cmp;
        this.pivotgridCmp.setMatrix(this.pivotgridMatrix);
        this.pivotgridCmp.setPlugins(this.pivotgridPlugins);
    }

    onButtonReady = (event) => {
        this.buttonCmp = event.detail.cmp;
        this.buttonCmp.setHandler(this.showConfigurator.bind(this));
    }

    showConfigurator = () => {this.pivotgridCmp.showConfigurator();}
}
