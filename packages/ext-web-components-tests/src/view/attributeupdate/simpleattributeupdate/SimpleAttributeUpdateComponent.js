import './SimpleAttributeUpdateComponent.html';

export default class SimpleAttributeUpdateComponent {
    constructor() {
        this.count = 0;
    }

  buttonReady = (event) => {
      this.buttonComp = event.detail.cmp;
  }

  onClick = () => {
      this.count++;
      this.buttonComp.setText(this.count);
  }
}
