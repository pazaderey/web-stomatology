const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
#header {
    background-color: #BD81C9;
    height: 4.5rem;
    display: flex;
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
    width: 6rem;
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
        <img src="../img/logo.svg" id="logo" />
        <div class="nav-elem"><a class="nav-link" href="/"><span>Home</span></a></div>
        <div class="nav-elem"><a class="nav-link" href="/detect"><span>Detect</span></a></div>
        <div class="nav-elem"><a class="nav-link" href="/help"><span>Help</span></a></div>
        <div class="nav-elem"><a class="nav-link" href="/feedback"><span>Feedback</span></a></div>
        <div class="nav-elem"><a class="nav-link" href="/about"><span>About</span></a></div>
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
