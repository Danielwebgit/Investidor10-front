import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Inicial from '../pages/Inicial';
import Create from '../pages/post/Create';
import Update from '../pages/post/Update';
import SingIn from '../pages/SignIn';
import { AuthState } from '../redux/store/ducks/auth/interfaces'
import isTokenValidd from '../Services/isTokenValidService';

export const AppRoutes = () => {

    function PrivateRoute({children}: any) {
        // = 
        const isAuthentication = useSelector((state: AuthState) => state.auth.isAuthentication);
       console.log(isAuthentication)
    
        if (isTokenValidd('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0Ojg5OTAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2Nzc4OTg3NTgsImV4cCI6MTY3NzkwMjM1OCwibmJmIjoxNjc3ODk4NzU4LCJqdGkiOiI2SXFDOGJPV2djM3NVWDBvIiwic3ViIjoiMTIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.rTxaOqk6CthYBpl3wVmCM7ZH7QabpNAiBpDdY8yxrIc')) {
            console.log("válido")
          } else {
            console.log("N válido")
          }
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