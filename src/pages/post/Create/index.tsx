import axios from 'axios';
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Form } from 'semantic-ui-react'
import { DivForm } from './style';




function Create() {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [user, setUser] = useState(2);

    const postData = () => {

        axios.post(`http://localhost:8990/api/posts/store`, {
            title,
            text,
            user_id:user
        })
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
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
        </DivForm>
       
    );
}

export default Create;