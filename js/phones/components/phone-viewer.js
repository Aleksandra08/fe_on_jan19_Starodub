import Component from './component.js';

export default class PhoneViewer extends Component {
    constructor({element}) {
        super({element});

        this.on('click', '[data-element = "back-button"]', () => {
            this.emit('back');
        });

        this.on('click', '[data-element="add-to-cart"]', () => {
            this.emit('add-phone', this._phoneDetails.id);
        })

        this.on('click', '[data-element = "small-preview"]', (event) => {
            //small img    event.target.src
            const bigPreview = this._element.querySelector('[data-element = "big-preview"]')
            bigPreview.src = event.target.src;
        })
    }

    show(phoneDetails) {
        this._phoneDetails = phoneDetails;
        this._render();
        super.show();
    }

    _render() {
        this._element.innerHTML = `
            <div class="img-big">
            <img 
            data-element = "big-preview"
            class="phone"
            src="${this._phoneDetails.images[0]}">
         </div>
          <div class="info-viewer">
             <div class="btn-group">
               <button class="viewer-btn phones__btn-buy-wrapper" data-element="back-button">Back</button>
               <button class="viewer-btn phones__btn-buy-wrapper" data-element="add-to-cart" >Add to basket</button>
             </div>
               <h1>"${this._phoneDetails.name}"</h1>
               <p>"${this._phoneDetails.description}"</p>
                <ul class="viewer-card">
                  ${this._phoneDetails.images.map(imgUrl => `
                    <li>
                       <img
                         class="img-small"
                         data-element = 'small-preview' 
                         src="${imgUrl}">
                     </li>`
        ).join('')}
                </ul>
            </div>
            `
    }
}
