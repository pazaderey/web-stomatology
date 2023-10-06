const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<style>
#footer {
    height: 3rem;
    background-color: #BD81C9;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.copyright {
    text-align: center;
    font-size: 1.2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding-left: 5rem;

}
</style>
<footer id="footer"><span class="copyright">Copyright © HSE MIEM</span></footer>
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
