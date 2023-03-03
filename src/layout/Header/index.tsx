import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AuthState } from '../../interfaces';
import { HeaderContent } from "./style";

// import './styles.css';

export default function Header() {

	const  isAuthentication = useSelector((state: AuthState) => state.auth.isAuthentication);
    
    return (
		    
        <HeaderContent>
            <div className="logo" >
                <img src="https://investidor10.com.br/assets/front/images/logo.svg" alt="" />
            </div>
                <ul className="menu">

                    {isAuthentication ? (
                        <>
                            <li><NavLink to="/cadastrar" className="nav-link"> CADASTRAR NOTÍCIAS </NavLink></li>
                            <li><NavLink to="/pagina-inicial" className="nav-link"> EXIBIR NOTÍCIAS </NavLink></li>
                        </>
                        
                    ) : ""}
                    
                    <li><NavLink to="/login" className="nav-link"> LOGIN </NavLink></li>
                </ul>
        </HeaderContent>


	);
}