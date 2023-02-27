import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Button, Form } from 'semantic-ui-react'

function Update() {

    

    return (
        <Form >
            <Form.Field>
                <label>Título</label>
                <input placeholder='Seu título aqui' />
            </Form.Field>
            <Form.Field>
                <label>Conteúdo</label>
                <textarea />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

export default Update;