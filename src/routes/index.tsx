import jwtDecode from 'jwt-decode';
import { Provider, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Inicial from '../pages/Inicial';
import Post from '../pages/Post';
import Create from '../pages/post/Create';
import SingIn from '../pages/SignIn';
import store from '../redux/store';

export const AppRoutes = () => {


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

    function PrivateRoute({children}: any) {
        
        if (checkIsAuthenticated()) {
            return children
          }
            
          return <Navigate to="/login" />
    }

    return (
        <Provider store={store}>
        <Routes>
            
            <Route path='/login' element={<SingIn/>}/>
            
            <Route
                path="/pagina-inicial"
                element={
                    <PrivateRoute>
                        <Inicial/>
                    </PrivateRoute>
                }
            />

            <Route
                path="/cadastrar"
                element={
                    <PrivateRoute>
                        <Create/>
                    </PrivateRoute>
                    }
            />

            <Route
                path="/post/:postId"
                element={
                    <PrivateRoute>
                        <Post />
                    </PrivateRoute>
                    }
                    
            />

            <Route path='*' element={<Navigate to="login" />}/>
        </Routes>
        </Provider>
    )
}