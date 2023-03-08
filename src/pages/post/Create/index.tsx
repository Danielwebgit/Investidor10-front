import axios from 'axios';
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Form } from 'semantic-ui-react'
import { DivForm } from './style';
import { addPost } from '../../../redux/store/fetchActions';
import store from '../../../redux/store';



function Create() {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [user, setUser] = useState(2);

    // const postData = () => {

    //     axios.post(`http://localhost:8990/api/dashboard/posts/store`, {
    //         title,
    //         text,
    //         user_id:user
    //     })
    // }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        store.dispatch(addPost(title, text, 2));
        //navigate('/pagina-inicial');
    }

    return (
        <DivForm>
             <Form >
            <Form.Field>
                <label>Título</label>
                <input placeholder='Seu título aqui' onChange={(e) => setTitle(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Conteúdo</label>
                <textarea onChange={(e) => setText(e.target.value)}/>
            </Form.Field>
            <Button onClick={handleSubmit} type='submit'>Submit</Button>
        </Form>
        </DivForm>
       
    );
}

export default Create;