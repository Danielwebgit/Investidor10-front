import { useEffect } from "react";
import { Params, useParams } from 'react-router-dom';
import { Container } from './style'
import { Button, Form } from 'semantic-ui-react'
import { useDispatch } from "react-redux";
import { getPostById } from "../../redux/store/fetchActions";
import store from "../../redux/store";
import { toast, ToastContainer } from "react-toastify";

interface PostId {
    postId: number
}

const Post = () => {

    const { postId } = useParams<Params>();
    const dispatch = useDispatch();

    useEffect(() => {
        store.dispatch(getPostById(postId))
    }, []);

    

    const notify = () => toast("Wow so easy!");

    return (
        <>
            <div className="message">
            <ToastContainer />
            </div>
            <Container>

                <div className="post-title">
                    <strong>Título do post aquiss</strong>
                </div>

                <div className="post-content">
                </div>

                <div className="post-footer">
                    <div className="box-button">
                    <Button onClick={notify}> Voltar </Button>
                    <Button> Editar </Button>
                    </div>
                </div>
            </Container>
        </>
    )

}

export default Post;