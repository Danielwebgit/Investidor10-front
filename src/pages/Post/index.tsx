import { Link} from 'react-router-dom';
import { Container } from './style'
import { Button, Form } from 'semantic-ui-react'
import { toast, ToastContainer } from "react-toastify";


const Post = () => {

    const notify = () => toast("Wow so easy!");
    const postData: any = JSON.parse(localStorage.getItem("postData") ?? "");

    return (
        <>

            <div className="message">
                <ToastContainer />
            </div>
            <Container>

                <div className="post-title">
                    <strong>{postData?.title}</strong>
                </div>

                <div className="post-content">
                    {postData?.text}
                </div>

                <div className="post-footer">
                    <div className="box-button">
                        <Link to="/pagina-inicial">
                            <Button> Voltar </Button>

                        </Link>

                        <Button> Editar </Button>
                    </div>
                </div>
            </Container>
        </>
    )

}

export default Post;