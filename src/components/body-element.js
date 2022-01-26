import { css, html, LitElement } from "lit";

class BodyElement extends LitElement{
    static get properties(){
        return {
            question: {type: String},
            text: {type: String}
        }
    }
    static get styles() {
        return css `
        .body-section p{
            font-size: 12px;
            color: #979797;
            font-weight: bold;
            line-height: 1.5;
        }
        .body-section{
            border-bottom: 1px solid #c5c5c5;
        }
        `
    }

    constructor(){
        super();
        this.question = ''
        this.text = ''
    }

    render(){
        return html ` <div class="body-section">
        <h4>${this.question}</h4>
        <p>${this.text}</p>
        </div>`
    }
}

customElements.define('body-element', BodyElement)