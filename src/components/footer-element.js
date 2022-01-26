import { css, html, LitElement } from "lit";

class FooterElement extends LitElement{
    static get styles() {
        return css `
        .footer{
            display: flex;
            margin-top: 10px;
            font-size: 12px;
            font-weight: bold;
        }
        `
    }

    constructor(){
        super();
    }

    render(){
        return html `
        <div class="footer">
            <tag-element text="# ACS"></tag-element>
            <tag-element text="# Assays"></tag-element>
        </div>`
    }
}

customElements.define('footer-element', FooterElement)