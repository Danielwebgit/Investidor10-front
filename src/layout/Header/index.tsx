import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AuthState } from '../../interfaces';
import { HeaderContent } from "./style";

// import './styles.css';

export default function Header() {

    // = useSelector((state: AuthState) => state.auth.isAuthentication);

    interface Token {
        exp: number;
      }

    function checkIsAuthenticated()  {
        const token = localStorage.getItem('token');
      
        if (!token) {
          return false;
        }
      
        try {
            const decodedToken = jwtDecode<Token>(token);
            const expirationDate = new Date(decodedToken.exp * 1000);
            const now = new Date();
            return now < expirationDate;
        } catch (err) {
          return false;
        }
      }
    
    return (
		    
        <HeaderContent>
            <div className="logo" >
                <img src="https://investidor10.com.br/assets/front/images/logo.svg" alt="" />
            </div>
                <ul className="menu">

                    {checkIsAuthenticated() ? (
                        <>
                            <li><NavLink to="/cadastrar" className="nav-link"> CADASTRAR NOTÍCIAS </NavLink></li>
                            <li><NavLink to="/pagina-inicial" className="nav-link"> EXIBIR NOTÍCIAS </NavLink></li>
                            <li><NavLink to="/logout" className="nav-link"> LOGOUT </NavLink></li>
                        </>
                        
                    ) : ""}
                    
                    <li><NavLink to="/login" className="nav-link"> LOGIN </NavLink></li>
                </ul>
        </HeaderContent>


	);
}