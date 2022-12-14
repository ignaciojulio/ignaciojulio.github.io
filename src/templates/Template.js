import logoWhite from "@icon/logo_white.svg"
import picture from "@images/picture_principal.png"

const Template = async () => {
    const view = `
            <figure>
                <img src="${logoWhite}" alt="logo">
                <h1>Ignacio</h1>
            </figure>
            <figure class="foto">
                <img class="foto" src="${picture}" alt="picture">
            </figure>
            <nav>
                <ul>
                    <li><a href="#">#Inicio</a></li>
                    <li><a href="#">#Trabajos</a></li>
                    <li><a href="#">#Hacerca de mi</a></li>
                    <li><a href="#">#Contactos</a></li>
                    <div>
                        <select name="lenguajes" id="lang">
                        <option value="ES">ES</option>
                        <option value="EN">EN</option>
                        <option value="日本語">日本語</option>
                    </div>
                </ul>
            </nav>  
  `;
    return view;
};

export default Template;