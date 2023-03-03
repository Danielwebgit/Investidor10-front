import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthState } from '../interfaces';
import Inicial from './Inicial';
import Create from './post/Create';
import SingIn from './SignIn';

function PrivateRoute({children}: any) {

    const  isAuthentication = useSelector((state: AuthState) => state.auth.isAuthentication);

    if (isAuthentication) {
        return children
      }
        
      return <Navigate to="/login" />
}


export default () => (
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
);
