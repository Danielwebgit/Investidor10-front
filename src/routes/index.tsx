import { Routes, Route, Navigate } from 'react-router-dom'
import Inicial from '../pages/Inicial'
import Create from '../pages/post/Create'
import Update from '../pages/post/Update'

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Inicial/>}/>
            <Route path='/cadastrar' element={<Create/>}/>
            <Route path='/atualizar' element={<Update/>}/>

            <Route path='*' element={<Navigate to="pagina-inicial" />}/>
        </Routes>
    )
}