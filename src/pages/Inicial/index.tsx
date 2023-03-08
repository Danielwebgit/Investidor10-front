import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { RootState } from '../../redux/store';
import { fetchPosts, fetchUsers } from '../../redux/store/fetchActions';
import Post from '../Post';

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

interface Posts {
  data: {
    id: number;
    title: string;
    text: string;
  }
}

export interface PostState {
  
  data: {
    posts: Posts[]
  }
}

const Inicial = () => {

  const dispatch = useDispatch();
  const { auth } = useSelector((state: AuthState): {auth: any}  => ({auth: state.auth}));
  const  { posts }  = useSelector((state: RootState): any => ({posts: state.posts.posts}));

  useEffect(() => {

    dispatch(fetchPosts());

  }, [dispatch])

  const getPostById = (postId: any) => {

    //return <Post postId={postId}></Post>

  }

  
  {
    return (
      <>  
        <div className="App">
          <Container className='container'>
            {posts.length != 0 ? posts.data.map((item: any, index: any) =>
            
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
                    <Link to={'/post/'+item['post']['id']}>
                      <Button onClick={() =>getPostById(item['post']['id'])} >Acessar</Button>
                    </Link>

                    <Link to='/delete'>
                    <Button >Deletar</Button>
                    </Link>

                    <Link to='/atualizar'>
                    <Button >Atualizar</Button>
                    </Link>
                  </Links>
                  
                </div>
              </div>) : null}
          </Container>
        </div>
      </>
    )

  }
}
export default Inicial;