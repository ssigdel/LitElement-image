import { css, html, LitElement } from 'lit';

const data = {
    username : 'Mikolaj Gonzalez',
    question: 'How do we add new containers to Project?',
    body: 'Sunt tempor laborum nulla minim irure incididunt reprehenderit velit nulla elit eu pariatur fugiat. Eu elit occaecat qui do. Qui non in id ex laborum laborum sunt id do nulla in. Non enim tempor commodo ad aute nulla laborum.',
    img: 'https://www.surtecsuzuki.com.mx/facturas/img/user1.jpg',
    answers: 8,
    status: 'In Progress',
    Date: 'November 9, 2020',
    time: '6:35pm',
    users: [
        'https://www.surtecsuzuki.com.mx/facturas/img/user2.jpg', 
        'https://www.surtecsuzuki.com.mx/facturas/img/user3.jpg', 
        'https://www.surtecsuzuki.com.mx/facturas/img/user4.jpg', 
        'https://www.surtecsuzuki.com.mx/facturas/img/user5.jpg']
}

class ContainerElement extends LitElement{
    static get styles(){
        return css `
        .wrapper{
            width: 70%;
            margin: 10% auto;
            border: 1px solid #777;
            background-color: #ffffff;
        }
        .container{
            margin: 20px;
            display: flex;
        }
        .main-content{
            flex: 1;
            margin-left: 20px
        }
        `
    }

    constructor(){
        super();
    }

    render(){
        return html `
            <div class="wrapper">
            <div class="container">
                <side-element answers=${data.answers}></side-element>
                <div class="main-content">
                    <header-element .data=${data}></header-element>
                    <body-element question=${data.question} text=${data.body}></body-element>
                    <footer-element></footer-element>
                </div>
                
            </div>
            </div>
        `
    }

}

customElements.define('container-element', ContainerElement)