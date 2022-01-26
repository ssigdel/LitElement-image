import { css, html, LitElement } from "lit";

class ImageElement extends LitElement{
    static get properties(){
        return {
            src: {type: String}
        }
    }

    static get styles() {
        return css `
        .user-img{
            margin-left: -2px;
        }
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        `
    }

    constructor(){
        super();
        this.src = ''
    }

    render(){
        return html `<div class="user-img">
            <img src=${this.src}>
        </div>`
    }
}

customElements.define('image-element', ImageElement)