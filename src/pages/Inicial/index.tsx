import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { RootState } from '../../redux/store';
import { fetchPosts, deletePostAction } from '../../redux/store/fetchActions';

import { Container, Links } from './style';

interface User {
  id: number;
  name: string;
  email: string;
}
export interface AuthState {
  auth: {
    isAuthentication: boolean;
    user: User | null;
    token: string | null;
  };
}

const Inicial = () => {

  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState): any => state.posts);


  useEffect(() => {
    dispatch(fetchPosts());

  }, [dispatch])


  const handleButtonClick = (postID: any) => {
    dispatch(deletePostAction(postID))
  };

  const handlePostData = (postData: any) => {
    localStorage.setItem("postData", JSON.stringify(postData))
  }

  return (
    <>

      <div className="App">
        <Container className='container'>
          {posts.data?.map((item: any, index: any) =>

            <div>

              <div className="bloco">
                <div className="titulo">
                  <h3>{item['post']['title']}</h3>
                </div>
                <div className="post">
                  <p>{item['post']['text']}</p>
                </div>
                <span>Por: {item['post']['autor']['name']}</span>
                <div className="but-div">

                </div>
                <Links className='link-action'>
                  <Link to={'/post/' + item['post']['id']}>
                    <Button onClick={() => handlePostData(item['post'])} >Acessar</Button>
                  </Link>

                  <Button onClick={() => handleButtonClick(item['post']['id'])}>Deletar</Button>

                  <Link to='/atualizar'>
                    <Button >Atualizar</Button>
                  </Link>
                </Links>

              </div>
            </div>)}
        </Container>
      </div>
    </>
  )
}
export default Inicial;