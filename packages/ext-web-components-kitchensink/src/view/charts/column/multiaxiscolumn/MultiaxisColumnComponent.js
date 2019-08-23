import '../../charttoolbar/ChartToolbar.js';
import './MultiaxisColumnComponent.html';
import createData from './MultiaxisColumnComponentData.js';

export default class MultiaxisColumnComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: [
                'month',
                'high',
                'low',
                {
                    name: 'highF',
                    calculate: function(data) {
                        return data.high * 1.8 + 32;
                    }
                },
                {
                    name: 'lowF',
                    calculate: function(data) {
                        return data.low * 1.8 + 32;
                    }
                }
            ]
        });
    }

    cartesianReady = (event) => {
        this.cartesianCmp = event.detail.cmp;
        this.cartesianCmp.setAxes([
            {
                type: 'numeric',
                adjustByMajorUnit: true,
                position: 'left',
                titleMargin: 20,
                minimum: 32,
                grid: true,
                title: 'Temperature in °F',
            },
            {
                type: 'numeric',
                titleMargin: 20,
                position: 'right',
                title: 'Temperature in °C'
            },
            {
                type: 'category',
                id: 'months-axis',
                position: 'bottom'
            },
            {
                position: 'top',
                linkedTo: 'months-axis',
                title: {
                    text: 'Climate data for Redwood City, California',
                    fontSize: 18,
                    fillStyle: 'green'
                }
            }
        ]);
        this.cartesianCmp.setSeries([{
            type: 'bar',
            xField: 'month',
            yField: 'highF',
            yAxis: 0,
            style: {
                minGapWidth: 10,
                strokeStyle: 'rgb(52, 52, 53)'
            },
            subStyle: { fillStyle: 'url(#rainbow)' }
        }, {
            type: 'bar',
            xField: 'month',
            yField: ['lowF'],
            yAxis: 0,
            style: {
                minGapWidth: 10,
                strokeStyle: 'rgb(52, 52, 53)'
            }
        }]);
        this.cartesianCmp.setGradients([{
            id: 'rainbow',
            type: 'linear',
            degrees: 270,
            stops: [
                {
                    offset: 0,
                    color: '#78C5D6'
                },
                {
                    offset: 0.14,
                    color: '#449AA7'
                },
                {
                    offset: 0.28,
                    color: '#79C267'
                },
                {
                    offset: 0.42,
                    color: '#C4D546'
                },
                {
                    offset: 0.56,
                    color: '#F5D63D'
                },
                {
                    offset: 0.70,
                    color: '#F18B32'
                },
                {
                    offset: 0.84,
                    color: '#E767A1'
                },
                {
                    offset: 1,
                    color: '#BF62A6'
                }
            ]
        }]);

        this.store.loadData(createData());
        this.cartesianCmp.setStore(this.store);
    }
}
