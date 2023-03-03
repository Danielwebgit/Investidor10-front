import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Inicial from '../pages/Inicial';
import Create from '../pages/post/Create';
import Update from '../pages/post/Update';
import SingIn from '../pages/SignIn';
import {AuthState} from '../interfaces'

export const AppRoutes = () => {

    function PrivateRoute({children}: any) {

        const isAuthentication = useSelector((state: AuthState) => state.auth.isAuthentication);
    
        if (isAuthentication) {
            return children
          }
            
          return <Navigate to="/login" />
    }

    return (
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

            <Route path='*' element={<Navigate to="login" />}/>
        </Routes>
    )
}