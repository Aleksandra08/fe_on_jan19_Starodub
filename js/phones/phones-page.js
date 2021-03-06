import ShoppingCart from "./components/shopping-cart.js";
import PhoneViewer from "./components/phone-viewer.js"
import PhonesCatalog from "./components/phones-catalog.js";
import PhonesService from "./services/phones-service.js"
import Filter from "./components/filter.js";

export default class PhonesPage {
    constructor({element}) {
        this._element = element;
        this._render();

        this._initFilter();
        this._initCatalog();
        this._initViewer();
        this._initCart();
    }

    _initCatalog() {
        this._catalog = new PhonesCatalog({
            element: this._element.querySelector('[data-component ="phone-catalog"]')
        });

        this._showPhones();

        this._catalog.subscribe('phone-selected', (id) => {
            console.log('Selected:', id);
            PhonesService.getById(id).then((phoneDetails) => {
                this._catalog.hide();
                this._viewer.show(phoneDetails);
            });
        });

        this._catalog.subscribe('add-phone', (phoneId) => {
            this._cart.addToCart(phoneId);
        })

    }

    _initViewer() {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component ="phone-viewer"]')
        });

        this._viewer.subscribe('back', () => {
            this._showPhones();
            this._viewer.hide();
        });

        this._viewer.subscribe('add-phone', (phoneId) => {
            this._cart.addToCart(phoneId);
        })
    }

    _initCart() {
        this._cart = new ShoppingCart({
            element: this._element.querySelector('[data-component ="shopping-cart"]')
        });
    }

    _initFilter() {
        this._filter = new Filter({
            element: this._element.querySelector('[data-component="filter"]')
        });
        this._filter.subscribe('query-change', (eventData) => {
            this._showPhones()
        });
        this._filter.subscribe('order-change', (eventData) => {
            this._showPhones();
        });

    }

    _showPhones() {
        this._currentFiltering = this._filter.getCurrent();
        PhonesService.getAll(this._currentFiltering).then((phones) => {
            this._catalog.show(phones);
        })
    }

    _render() {
        this._element.innerHTML = `
            <div class="catalog">
    
             <!--Sidebar-->
             <div class="sidebar">
            
            <section class="search"> 
              <div class="filter" data-component='filter'></div>
            </section>
          </div>
    
          <!--Main content-->
          <div class="catalog-box">
          
          <div class ='basket' data-component='shopping-cart'></div>   
           <div class="phone-list" data-component ='phone-catalog'></div>
           </div>
           <div class ="viewer" data-component ='phone-viewer'>
          </div>
        </div>
     `
    }
}
