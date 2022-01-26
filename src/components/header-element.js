import { css, html, LitElement } from "lit";

class HeaderElement extends LitElement{
    static get properties(){
        return {
            data: {type: Array},
        }
    }
    static get styles() {
        return css `
        .header{
            display: flex;
            justify-content: space-between;
        }
        .user-info{
            display: flex;
        }
        .user-images{
            display: flex;
        }
        .details{
            margin-left: 5px;
            display: flex;
            flex-direction: column;
        }
        .username{
            font-weight: bold;
            font-size: 12px;
        }
        .date{
            font-size: 12px;
            font-weight: bold;
            color: #979797;
        }
        .date-info{
            display: flex;
            font-size: 12px;
        }
        .date-info span{
            margin-right: 5px;
        }
        .code{
            margin-left: 10px;
            font-weight: bold;
            color: #6179fe;
        }
        .progress{
            background-color: #eaa800;
            border-radius: 10px;
            padding: 3px 5px;
            font-weight: bold;
            margin: 0 10px;
        }
        `
    }

    constructor(){
        super();
        this.data = []
    }

    render(){
        return html `
        <div class="header">
            <div class="user-info">
                <image-element src=${this.data.img}></image-element>
                <div class="details">
                <span class="username">${this.data.username}</span>
                <div class="date-info">
                <span class="date">${this.data.Date} at ${this.data.time}</span>
                <span>|</span>
                <span class="code">ACS-1</span>
                <div class="progress">${this.data.status}</div>
                </div>
                </div>
            </div>
            <div class="user-images">
                ${this.data.users.map((item) =>  html `<image-element src=${item}></image-element>`)}
                <div class="dots">
                <img src="images/dots.png" alt="dots">
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('header-element', HeaderElement)