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
import { AuthState, UsersState } from "../../interfaces";
import apiService from "../../Services/apiService";
import { validTokenService } from "../../Services";
import api from "../../Services/api";



const SingIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const posts = useSelector((state) => state);
    const  user = useSelector((state: UsersState) => state.users);
    
    //const [token, setToken] = useState(isAuthentication);
    
    interface User {
      id: number;
      name: string;
      email: string;
    }

    const [users, setUsers] = useState<User[]>([]);
    
    useEffect(() => {
        
        const fetchUsers = async () => {
          const data: any = await api.post('/validate-token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0Ojg5OTAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2Nzc4OTg3NTgsImV4cCI6MTY3NzkwMjM1OCwibmJmIjoxNjc3ODk4NzU4LCJqdGkiOiI2SXFDOGJPV2djM3NVWDBvIiwic3ViIjoiMTIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.rTxaOqk6CthYBpl3wVmCM7ZH7QabpNAiBpDdY8yxrIc' );
          console.log(data)
          setUsers(data);
        };
       
        fetchUsers();
        //console.log(isAuthentication)
        console.log('posts')
        console.log(posts)
        console.log('posts')
        // if(token){
        //   //console.log(validTokenService.validToken(token));
        // }
        //if(isAuthentication)
        //console.log("ddd")
        //navigate('/pagina-inicial');
        
        
    }, [])

    const handleSignIn = async (e: any) => {
        e.preventDefault();
        store.dispatch(login(email, password));
        navigate('/pagina-inicial');
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