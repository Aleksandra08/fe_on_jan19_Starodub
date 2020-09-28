import Component from "./component.js";
import {debounce} from "../../utils.js";

export default class Filter extends Component {
    constructor({element}) {
        super({element});
        this._render();

        this._queryField = this._element.querySelector("[data-element ='query-field']");
        this._orderField = this._element.querySelector("[data-element ='order-field']");

        this.on('change', "[data-element ='order-field']", (event) => {
            this.emit('order-change');
        });
        const debouncedOnInput = debounce((event) => {
            this.emit('query-change');
        }, 500);

        this.on('input', "[data-element ='query-field']", debouncedOnInput);

    }

    getCurrent() {
        return {
            query: this._queryField.value,
            order: this._orderField.value
        }
    }

    _render() {
        this._element.innerHTML = `
           <div>
                Search:
                <input class="field" data-element ='query-field'>
              </div>
    
              <div>
                Sort by:
                <select class="field" data-element ='order-field'>
                  <option  value="name">Alphabetical</option>
                  <option  value="age">Newest</option>
                </select>
              </div>
        `
    }

}
