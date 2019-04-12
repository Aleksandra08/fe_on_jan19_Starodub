import Component from './component.js';

export default class PhonesCatalog extends Component {
    constructor({
                    element,
                    phones = []
                }) {
        super({element});
        this._phones = phones;
        this._render();

        this.on('click', '[data-element="details-link"]', () => {
            const phoneEl = event.target.closest('[data-element = "phone-element"]');
            const phoneId = phoneEl.dataset.phoneId;
            this.emit('phone-selected', phoneId);
        });

        this.on('click', '[data-element="btn-add"]', () => {
            const phoneEl = event.target.closest('[data-element = "phone-element"]');
            const phoneId = phoneEl.dataset.phoneId;
            this.emit('add-to-cart', phoneId);
        })
    }

    _render() {
        this._element.innerHTML = `
        <ul class="phones" >
        ${
            this._phones.map(phone => `
            <li 
            class="thumbnail" 
            data-phone-id=${phone.id}
            data-element = "phone-element"
            >
                <a href="#!/phones/motorola-xoom-with-wi-fi" 
                   class="thumb"
                   data-element = "details-link"
                 >
                  <img alt="${phone.name}" src="${phone.imageUrl}">
                </a>
    
                <div class="phones__btn-buy-wrapper">
                  <a class="btn btn-success"
                  data-element="btn-add"
                  >
                    Add
                  </a>
                </div>
    
                <a href="#!/phones/motorola-xoom-with-wi-fi"
                   data-element = "details-link"
                    >${phone.name}</a>
                <p>${phone.snippet}</p>
              </li>
            `).join('')
            }
            </ul>
        `
    }
}