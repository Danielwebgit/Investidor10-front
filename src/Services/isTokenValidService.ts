import jwtDecode, { JwtPayload } from 'jwt-decode';
import { Token } from '../interfaces'

const isTokenValidd = (token: string): boolean => {
    const decodedToken = jwtDecode<Token>(token);
    const expirationDate = new Date(decodedToken.exp * 1000);
    const now = new Date();
    return now < expirationDate;
}

export default isTokenValidd;