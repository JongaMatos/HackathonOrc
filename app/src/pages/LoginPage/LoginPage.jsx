import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../../context/userContext';

import { Link } from "../../styles/Link";
import { Button } from "../../styles/Button";
import { Page } from "../../styles/Page";
import { Container } from "../../styles/Container";
import { TextInput } from "../../styles/TextInput";
import { Title } from "../../styles/Title";
import orc_jump from "../../assets/orc-pose-jump 1.png"


function Login() {

    const { user, login, recoverUser } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!user)
            recoverUser()
        else
            history.push('/');

        // eslint-disable-next-line 
    }, [user])

    return (

        <Page>
            <Container>
                <img alt="orcinho" src={orc_jump} width='20%' />
                <Title>Faça seu login</Title>
                <TextInput type="text" id="email" placeholder="Email" />
                <TextInput type="password" id="password" placeholder="Senha" />
                <Button
                    onClick={() => {
                        login(document.getElementById('password').value,
                            document.getElementById('email').value)
                    }
                    }
                >
                    Entrar
                </Button>
                <Link href="/forgetpassword"> Esqueci minha senha </Link>
                <Link href="/register"> Criar minha conta </Link>
            </Container>

        </Page>
    );
}

export default Login;