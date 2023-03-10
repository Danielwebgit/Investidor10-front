import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import List from '../post/List';
import { Container, Links } from './style';

const Inicial = () => {

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8990/api/posts`)
      .then((response) => {
        setAPIData(response.data.data);
      })
  }, [])

  const setData = (data: any) => {
    console.log(data);
 }

  {
    return (
      <div className="App">
        <Container className='container'>
          {APIData.map((data, index) =>
  
            <div>
              <div className="bloco">
                <div className="titulo">
                  <h3>{data['post']['title']}</h3>
                </div>
                <div className="post">
                  <p>{data['post']['text']}</p>
                </div>
                <span>Por: {data['post']['autor']['name']}</span>
                <div className="but-div">
                
                </div>
                <Links className='link-action'>
                  <Link to='/vizualizar'>
                    <Button onClick={() => setData(data)}>Acessar</Button>
                  </Link>

                  <Link to='/delete'>
                  <Button onClick={() => setData(data)}>Deletar</Button>
                  </Link>

                  <Link to='/atualizar'>
                  <Button onClick={() => setData(data)}>Atualizar</Button>
                  </Link>
                </Links>
                
              </div>
            </div>)}
        </Container>
      </div>
    )

  }
}
export default Inicial;