import './ThreeDStackedComponent.html';

export default class ThreeDStackedComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['country', 'agr', 'ind', 'ser'],
            data: [
                { country: 'USA', agr: 188217, ind: 2995787, ser: 12500746 },
                { country: 'China', agr: 918138, ind: 3611671, ser: 3792665 },
                { country: 'Japan', agr: 71568, ind: 1640091, ser: 4258274 },
                { country: 'UK', agr: 17084, ind: 512506, ser: 1910915 },
                { country: 'Russia', agr: 78856, ind: 727906, ser: 1215198 }
            ]
        });
        this.theme = 'default';
        this.menuCmpArray = [];
        this.stacked = 0;
    }

    onMenuItemReady = (event) => {
        this.menuCmpArray.push(event.detail.cmp);
        event.detail.cmp.on('click', this.onThemeChange.bind(this));
    }

    onStackButtonReady = (event) => {
        this.stackButtonCmp = event.detail.cmp;
        this.stackButtonCmp.on('tap', this.onStackedToggle.bind(this, { value: 0 }));
    }

    onGroupButtonReady = (event) => {
        this.groupButtonCmp = event.detail.cmp;
        this.groupButtonCmp.on('tap', this.onStackedToggle.bind(this, { value: 1 }));
    }

    onStackedToggle = (event) => {
        if (event.value == 0) {
            this.stacked = 1;
        } else {
            this.stacked = 0;
        }

        this.cartesianCmp.getSeries()[0].setStacked(this.stacked);
        this.cartesianCmp.redraw();
    };

    onThemeChange = (event) => {
        this.theme = event.config.text.toLowerCase();
        this.menuCmpArray.forEach((cmp, index) => {
            if (index == parseInt(event.config.itemId)) {
                cmp.setIconCls('x-font-icon md-icon-done');
                return;
            }
            cmp.setIconCls('');
        });
        this.cartesianCmp.setTheme(event.config.text.toLowerCase());
    }

    onTooltipRender(tooltip, record, item) {
        const formatString = '0,000 (millions of USD)',
            fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            sector = item.series.getTitle()[fieldIndex],
            value = Ext.util.Format.number(record.get(item.field), formatString);

        tooltip.setHtml(sector + ': ' + value);
    }

    cartesianReady = (event) => {
        this.cartesianCmp = event.detail.cmp;
        this.cartesianCmp.setStore(this.store);
        this.cartesianCmp.setTheme(this.theme);
        this.cartesianCmp.setAxes([{
            type: 'numeric3d',
            position: 'left',
            title: 'Billions of USD',
            renderer: (axis, label, layoutContext) => Ext.util.Format.number(layoutContext.renderer(label) / 1000, '0,000'),
            grid: {
                odd: {
                    fillStyle: 'rgba(255, 255, 255, 0.06)'
                },
                even: {
                    fillStyle: 'rgba(0, 0, 0, 0.03)'
                }
            }
        }, {
            type: 'category3d',
            position: 'bottom',
            grid: true
        }]);
        this.cartesianCmp.setSeries([{
            type: 'bar3d',
            xField: 'country',
            yField: ['agr', 'ind', 'ser'],
            title: ['Agriculture', 'Industry', 'Services'],
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: this.onTooltipRender.bind(this)
            }
        }]);
        this.cartesianCmp.setCaptions({
            title: {
                text: '2011 Major economies by GDP sector',
            }
        });
    }
}
