import './WizardComponent.html';

export default class WizardComponent {

    constructor() {
        console.log('in WizardComponent constructor');

        this.step = 0;
        this.tapMode = 'direction';
    }

    directionButtonReady = (event) => {
        this.directionButtonCmp = event.detail.cmp;
        this.directionButtonCmp.setTooltip({
            maxWidth: '300',
            html: `
              <div style="font-weight:bold;font-size:14px;font-family:courier;">
                &lt;Indicator tapMode="direction" /&gt;
              </div>
              <p>
                Clicking on a dot in the indicator will move the wizard one step forward or backward depending on the side that was clicked.
              </p>
            `
        });
    }

    itemButtonReady = (event) => {
        this.itemButtonCmp = event.detail.cmp;
        this.itemButtonCmp.setTooltip({
            maxWidth: '300',
            html: `
          <div style="font-weight:bold;font-size:14px;font-family:courier;">
            &lt;Indicator tapMode="item" /&gt;
          </div>
          <p>
            Clicking on a dot in the indicator will move the wizard to the corresponding step.
          </p>
        `
        });
    }

    containerReady1 = (event) => {
        this.containerCmp1 = event.detail.cmp;
        this.containerCmp1.setHtml(`
        <h1>Welcome to the Demo Wizard!</h1>
        Step 1 of 3
        Please click the "Next" button to continue...`
        );
    }

    containerReady2 = (event) => {
        this.containerCmp2 = event.detail.cmp;
        this.containerCmp2.setHtml(`Step 2 of 3 Almost there. Please click the "Next" button to
        continue... `);
    }

    containerReady3 = (event) => {
        this.containerCmp3 = event.detail.cmp;
        this.containerCmp3.setHtml(`<h1>Congratulations!</h1>

        Step 3 of 3 - Complete
        `);
    }

    segmentedButtonReady = (event) => {
        this.segmentedbuttonCmp = event.detail.cmp;
        this.segmentedbuttonCmp.setValue(this.tapMode);
    }

    leftButtonReady = (event) => {
        this.leftButtonCmp = event.detail.cmp;
        this.leftButtonCmp.setDisabled(true);
    }

    rightButtonReady = (event) => {
        this.rightButtonCmp = event.detail.cmp;
        this.rightButtonCmp.setDisabled(false);
    }

    indicatorReady = (event) => {
        this.indicatorCmp = event.detail.cmp;
        this.indicatorCmp.setActiveIndex(0);
    }

    panelReady = (event) => {
        this.panelCmp = event.detail.cmp;
    }

    setDisabled = () => {
        if (this.step === 0) {
            this.leftButtonCmp.setDisabled(true);
        } else this.leftButtonCmp.setDisabled(false);

        if (this.step === 2) {
            this.rightButtonCmp.setDisabled(true);
        } else this.rightButtonCmp.setDisabled(false);
    }

    previous = () => {
        this.step = this.step - 1;
        this.indicatorCmp.setActiveIndex(this.step);
        this.panelCmp.setActiveItem(this.step);
        this.setDisabled();
    }

    next = () => {
        this.step = this.step + 1;
        this.indicatorCmp.setActiveIndex(this.step);
        this.panelCmp.setActiveItem(this.step);
        this.setDisabled();
    }

    onIndicatorTap = (event) => {
        this.step = event.detail.index;
        this.indicatorCmp.setActiveIndex(this.step);
        this.panelCmp.setActiveItem(this.step);
        this.setDisabled();
    }

    changeTapMode = (event) => {
        this.tapMode = event.detail.value;
        this.segmentedbuttonCmp.setValue(this.tapMode);

        if (this.indicatorCmp) {
            this.indicatorCmp.setTapMode(this.tapMode);
        }
    }
}
