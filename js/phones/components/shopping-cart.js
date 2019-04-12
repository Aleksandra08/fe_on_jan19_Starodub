import Component from "./component.js";

export default class ShoppingCart extends Component {
    constructor({
                    element,
                    basket = []
                }) {
        super({element});
        this.basket = basket;
        this._render();
    }

    _addToCart(phone) {
        this.basket.push(phone);
        let namePhone = this._element.querySelector('[data-element="list-phone"]');
        namePhone.innerHTML = `
                ${
            this.basket.map(phone => `<li> ${phone} </li>`).join('')
            }`
    }

    _render() {
        this._element.innerHTML = `
         <p>Shopping Cart</p>
              <ul data-element="list-phone">  
              </ul>
        `
    }
}