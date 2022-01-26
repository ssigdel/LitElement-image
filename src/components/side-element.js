import { css, html, LitElement } from "lit";

class SideElement extends LitElement{
    static get properties(){
        return {
            answers: {type: Number}
        }
    }

    static get styles() {
        return css `
        .side-bar{
            display: flex;
            flex-direction: column;
        }
        .answer{
            display: flex;
            flex-direction: column;
            padding: 10px;
            width: 40px;
            background-color: #4caf50;
            color: white;
            text-align: center;
            border-radius: 5px;
            font-size: 12px;
            margin-bottom: 5px;
        }`
    }

    constructor(){
        super();
        this.answers = 0
    }

    render(){
        return html `
        <div class="side-bar">
            <div class="answer">
                <span>${this.answers}</span>
                <span>answers</span>
            </div>
            <img src="images/flag.png" alt="flag"/>
        </div>`
    }
}

customElements.define('side-element', SideElement)