import { Header } from "./style";

import { NavLink } from "react-router-dom";

export default function Navbar() {
   
    return (
        <Header>
            <div className="logo" >
                <img src="https://investidor10.com.br/assets/front/images/logo.svg" alt="" />
            </div>
                <ul className="menu">
                    <li><NavLink to="/cadastrar" className="nav-link"> CADASTRAR NOTÍCIAS </NavLink></li> 
                    <li><NavLink to="/pagina-inicial" className="nav-link"> EXIBIR NOTÍCIAS </NavLink></li>
                </ul>
        </Header>
    );
}