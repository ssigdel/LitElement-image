import { css, html, LitElement } from "lit";

class TagElement extends LitElement{
    static get properties(){
        return {
            text: {type: String},
        }
    }
    static get styles() {
        return css `
         .tags{
             background-color: #f5f5f5;
             border-radius: 10px;
             padding: 3px 5px;
             font-weight: bold;
             margin: 0 10px;
         }
        `
    }

    constructor(){
        super();
        this.text = ''
    }

    render(){
        return html `
        <div class="tags">
        ${this.text}
        </div>
        `
    }
}

customElements.define('tag-element', TagElement)