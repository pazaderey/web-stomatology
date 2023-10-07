const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
    #header {
        width: 100%;
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

    #menu-img {
        height: 2rem;
        width: 2rem;
    }

    #nav {
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
        align-self: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 3rem;
        gap: 1%;
    }

    a.nav-link {
        text-decoration-color: #000000;
        text-decoration-line: none;
        color: #000000;
    }

    .nav-elem {
        height: 2.5rem;
        padding-left: 1%;
        padding-right: 1%;
        text-align: center;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dropdown {
        display: none;
    }

    .dropdown-options {
        display: none;
        overflow: auto;
        position: absolute;
        left: -8rem;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
    }
    
    .dropdown:hover .dropdown-options {
        display: block;
    }

    .dropdown-options a {
        display: block;
        color: #000000;
        text-decoration: none;
        padding: 15px 30px;
    }

    @media (max-width: 550px) {
        .nav-elem {
            display: none;
        }

        #nav {
            justify-content: space-between;
        }

        .dropdown {
            display: inline-block;
            position: relative;
        }

        .nav-btn {
            height: 2.5rem;
            width: 2.5rem;
            display: block;
            border: none;
            background-color: inherit;
            cursor: pointer;
        }
    }
</style>
<header id="header">
    <nav id="nav">
        <a class="nav-link" href="/"><img src="../img/logo.svg" id="logo" /></a>

        <div class="dropdown">
            <button class="nav-btn"><img src="../img/menu.png" id="menu-img" /></button>
            <div class="dropdown-options">
                <a href="/detect">Диагностика</a>
                <a href="/help">Помощь</a>
                <a href="/feedback">Отзывы</a>
                <a href="/about">О нас</a>
            </div>
        </div>

        <div class="nav-elem"><a class="nav-link" href="/detect"><span>Диагностика</span></a></div>
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


