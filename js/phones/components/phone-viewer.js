import Component from './component.js';

export default class PhoneViewer extends Component {
    constructor({
                    element, onBack = () => {
        }
                }) {
        super({element});
        this.onBack = onBack;
        this.on('click', '[data-element = "back-button"]', this.onBack)
    }

    show(phoneDetails) {
        this._phoneDetails = phoneDetails;
        this._render();
        super.show();
    }

    _render() {
        this._element.innerHTML = `
            <img class="phone" src="${this._phoneDetails.images[0]}">

    <button data-element="back-button">Back</button>
    <button>Add to basket</button>


    <h1>"${this._phoneDetails.name}"</h1>

    <p>"${this._phoneDetails.description}"</p>

    <ul class="phone-thumbs">
      <li>
        <img src="${this._phoneDetails.images[1]}">
      </li>
      <li>
        <img src="${this._phoneDetails.images[2]}">
      </li>
      <li>
        <img src="${this._phoneDetails.images[3]}">
      </li>
      <li>
        <img src="${this._phoneDetails.images[4]}">
      </li>
      <li>
        <img src="${this._phoneDetails.images[5]}">
      </li>
      <li>
        <img src="${this._phoneDetails.images[6]}">
      </li>
    </ul>
            }`
    }
}