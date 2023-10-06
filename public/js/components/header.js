const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
#header {
    background-color: #BD81C9;
    height: 4.5rem;
    display: flex;
    position: sticky;
    top: 0;
}

#logo {
    height: 4rem;
    width: 4rem;
}

#nav {
    width: 100%;
    padding-left: 5rem;
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3rem;
    gap: 1%;
}

.nav-link {
    text-decoration: none;
}

.nav-elem {
    height: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<header id="header">
    <nav id="nav">
        <a class="nav-link" href="/"><img src="../img/logo.svg" id="logo" /></a>
        <div class="nav-elem"><a class="nav-link" href="/detect"><span>Обнаружение</span></a></div>
        <div class="nav-elem"><a class="nav-link" href="/help"><span>Помощь</span></a></div>
        <div class="nav-elem"><a class="nav-link" href="/feedback"><span>Отзывы</span></a></div>
        <div class="nav-elem"><a class="nav-link" href="/about"><span>О нас</span></a></div>
    </nav>
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.appendChild(headerTemplate.content); 
    }
}

customElements.define("header-component", Header);


