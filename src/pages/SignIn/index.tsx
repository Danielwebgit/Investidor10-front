import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import loginServices from "../../Services/AuthService";
import { connect } from 'react-redux';
import { Form, Container } from "./style";
import { useDispatch } from "react-redux";
//import authReducer, { addAuth } from "../../reducers/auth";
import { useSelector } from 'react-redux';
import { login } from '../../redux/store/fetchActions';

import store from "../../redux/store";
import { AuthState } from "../../interfaces";



const SingIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const isAuthentication = useSelector((state: AuthState) => state.auth.isAuthentication);

    useEffect(() => {
            
        if(isAuthentication){
            navigate('/pagina-inicial')
        }
        
    }, [isAuthentication])

    const handleSignIn = async (e: any) => {

        
        
        e.preventDefault();
        store.dispatch(login(email, password));        
    }

    return (
        <Container>
        <Form onSubmit={handleSignIn}>
          {/* {this.state.error && <p>{this.state.error}</p>} */}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar conta grátis</Link>
        </Form>
      </Container>
    );



}

export default SingIn;