import { useContext, useEffect } from "react";
import { UserContext } from '../../context/userContext';

import { Link } from "../../styles/Link";
import { Button } from "../../styles/Button";
import { Page } from "../../styles/Page";
import { Container } from "../../styles/Container";
import { TextInput } from "../../styles/TextInput";
import { Title } from "../../styles/Title";

function Register() {

    const { user, login, recoverUser, register } = useContext(UserContext);

    useEffect(() => {

        recoverUser()

    }, [])

    return (
        <Page>
            <Container>
                <Title>Cadastr'orc</Title>
                <TextInput placeholder="Nome" id="name" />
                <TextInput type="text" placeholder="Username" id="userName" />
                <TextInput type="text" placeholder="Email" id="email" />
                <TextInput type="password" placeholder="Senha" id="password" />
                <TextInput type="password" placeholder="Confirmar Senha" id="cPassword" />
                <Button
                    onClick={() => {
                        register(
                            document.getElementById('name').value,
                            document.getElementById('userName').value,
                            document.getElementById('email').value,
                            document.getElementById('password').value,
                            document.getElementById('cPassword').value
                        );
                    }}
                >
                    Cadastrar
                </Button>
                <Link href="/login">Uau, esqueci que já tenho uma conta :P</Link>
            </Container>

        </Page>
    );
}

export default Register;