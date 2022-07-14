import react from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';
import { login } from '../../redux/apiCalls';


type PropsBtn = {
    onClick: string;
}
type PropsForm = {
    afterSubmit: any;
}

const Container = Styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = Styled.div`
    border-radius: 10px;
    padding: 15px;
    background-color: #2f2841;
    width: 20%;
    padding: 30px 45px;
`;

const Title = Styled.h1`
    text-align: center;
    font-weight: 600;
    color: #62ee17;
`;

const Form = Styled.form.attrs((props: PropsForm) => ({
    afterSubmit: props.afterSubmit,
}))<PropsForm>`
    display: flex;
    flex-direction: column;
`;

const LabelInput = Styled.label`
    color: #fff;
    font-weight: 400;
    margin-bottom: 10px;

    
`;

const Input = Styled.input`
    background-color: #585268;
    border: none;
    border-radius: 10px;
    padding: 14px;
    margin-bottom: 15px;
    outline: none;
    font-size: 16px;
    color: #fff;
    border: 1px solid #585268;

    &:focus {
        border: 1px solid #62ee17;

    }
`;

const Button = Styled.button.attrs((props: PropsBtn) => ({
    onClick: props.onClick,
}))<PropsBtn>`
    background-color: #62ee17;
    border: none;
    border-radius: 10px;
    padding: 15px;
    margin-top: 15px;
    font-weight: 600;
    font-size: 18px;
    color: #2f2841;
    cursor: pointer;
`;

const Wrapper = Styled.div`
    text-align: center;
`;

const Error = Styled.h3`
    color: red;
`;

const ForgotPassword = Styled.h4`
    color: #fff;
    font-weight: 600;
    margin-bottom: 05px;
    
`;

const CreateAccount = Styled.h4`
    color: #fff;
    font-weight: 600;
    margin-top: 10px;
`;

const Login: React.FC = () => {

    const [username, setUsername] = react.useState('');
    const [password, setPassword] = react.useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate('/');

        // console.log(username, password);
        login(dispatch, {username, password})
    }

    return (
        <Container>
            <Content>
                <Title>LOGIN</Title>
                <Form>
                    <LabelInput>Usuário</LabelInput>
                    <Input placeholder='Usuario' onChange={(e) => setUsername(e.target.value)}></Input>
                    <LabelInput>Password</LabelInput>
                    <Input placeholder='senha' type={'password'} onChange={(e) => setPassword(e.target.value)}></Input>
                    <Button type="submit" onClick={handleLogin}>ENTRAR</Button>
                </Form>
                <Wrapper>
                    <Error>Credenciais erradas</Error>
                    <ForgotPassword>Esqueci minha senha</ForgotPassword>
                    <CreateAccount>Criar conta</CreateAccount>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Login;