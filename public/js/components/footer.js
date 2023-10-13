const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<style>
#footer {
    height: 12rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
}

#footer-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.footer-item {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.footer-contacts {
    background-color: #353334;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.footer-copyright {
    height: 3rem;
    background-color: #BD81C9;
}

span.contacts {
    text-align: center;
}

span.name {
    font-size: 1.5rem;
    color: #ffffff;
}

span.email {
    font-size: 1.2rem;
    color: #ffffff;
}

div.contact-items {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3%;
}

img.contact-icon {
    height: 30px;
    width: 30px;
}

span.copyright {
    text-align: center;
    font-size: 1.2rem;
    padding-left: 5%;
    color: #000000;
}

</style>
<footer id="footer">
    <div id="footer-container">
        <div class="footer-item footer-contacts">
            <span class="name">
                Задерей Петр Алексеевич
            </span>
            <span class="email">
                pazaderey@edu.hse.ru
            </span>
            <div class="contact-items">
                <a href="https://t.me/pazaderey" target="_blank"><img class="contact-icon" src="../img/telegram.png"/></a>
                <a href="https://github.com/pazaderey" target="_blank"><img class="contact-icon" src="../img/social.png"/></a>
            </div>
        </div>
        <div class="footer-item footer-copyright"><span class="copyright">Copyright © HSE MIEM</span></div>
    </div>
</footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.appendChild(footerTemplate.content); 
    }
}

customElements.define("footer-component", Footer);
