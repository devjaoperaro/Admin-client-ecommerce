import react from 'react';
import Styled from 'styled-components';


const Container = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 15px;
`;

const Title = Styled.h1`

`;

const Form = Styled.form`

`;

const Imput = Styled.input`

`;

const Button = Styled.button`

`;

const Error = Styled.h3`

`;

const ForgotPassword = Styled.h4`

`;

const CreateAccount = Styled.h4`
    
`;

const Login: React.FC = () => {
    return (
        <Container>
            <Title>Login</Title>
            <Form>
                <Imput></Imput>
                <Imput></Imput>
                <Button>Entrar</Button>
            </Form>
            <Error>Credenciais erradas</Error>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
            <CreateAccount>Criar conta</CreateAccount>
        </Container>
    )
}

export default Login;