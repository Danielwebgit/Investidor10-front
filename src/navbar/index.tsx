import { Header } from "./style";

import { NavLink } from "react-router-dom";

export default function Navbar() {
   
    return (
        <Header>
            <div className="logo"></div>
                <ul className="menu">
                    <li><NavLink to="/cadastrar" className="nav-link"> CADASTRAR NOTÍCIAS </NavLink></li> 
                    <li><NavLink to="/pagina-inicial" className="nav-link"> EXIBIR NOTÍCIAS </NavLink></li>
                </ul>
        </Header>
    );
}