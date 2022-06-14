import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    flex: 4;
    padding: 40px;
`;

const Title = styled.h1`
    font-weight: 600;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const ContentInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-right: 30px;

`;

const Label = styled.label`
    color: #979797;
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 10px;
`;

const WrapperRadio = styled.div`
    display: flex;
    margin-top: 10px;
`;

const LabelInputRadio = styled.label`
    color: #201a1a;
    margin: 0px 15px 0px 5px;
    font-size: 19px;
`;

const Select = styled.select`
    padding: 13px;
    border: 1px solid #b8b5b5;
    border-radius: 5px;
    font-size: 15px;

    &:focus {
        border: 2px solid #47310e;
    }
`;

const Option = styled.option`
    font-size: 20px;
`;

const Input = styled.input`
    margin-bottom: 15px;
    outline:none;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #b8b5b5;

    &:focus {
        border: 2px solid #0E2B47;
    }
`;

const ButtonCreate = styled.option`
    padding: 10px;
    background-color: #0E2B47;
    color: #fff;
    border-radius: 15px;
    text-align: center;
    width: 50%;
    cursor: pointer;
    margin-top: 70px;
`;


const NewUser: React.FC = () => {
    return (
       <Container>
           <Title>Novo Usuário</Title>

            <Form>
                <ContentInput>
                    <Label>Username</Label>
                    <Input type='text'/>
                </ContentInput>
                {/* Full name */}
                <ContentInput>
                    <Label>Nome Inteiro</Label>
                    <Input type='text'/>
                </ContentInput>
                {/* Email */}
                <ContentInput>
                    <Label>Email</Label>
                    <Input type='email'/>
                </ContentInput>
                {/* Password */}
                <ContentInput>
                    <Label>Senha</Label>
                    <Input type='password'/>
                </ContentInput>
                {/* Phone */}
                <ContentInput>
                    <Label>Telefone</Label>
                    <Input type='number'/>
                </ContentInput>
                {/* Address */}
                <ContentInput>
                    <Label>Endereço</Label>
                    <Input type='text'/>
                </ContentInput>
                {/* Genero */}
                <ContentInput>
                    <Label>Gênero</Label>
                    <WrapperRadio>
                        <Input type='radio' name='Masculino'/>
                        <LabelInputRadio>Masculino</LabelInputRadio>

                        <Input type='radio' name='Feminino'/>
                        <LabelInputRadio>Feminino</LabelInputRadio>

                        <Input type='radio' name='Outro'/>
                        <LabelInputRadio>Outro</LabelInputRadio>
                    </WrapperRadio>
                </ContentInput>
                <ContentInput>
                    <Label>Ativo</Label>
                    <Select>
                        <Option>Sim</Option>
                        <Option>Não</Option>
                    </Select>
                </ContentInput>
                <ContentInput>
                    <ButtonCreate>Criar</ButtonCreate>
                </ContentInput>
            </Form>
       </Container>
    );
}

export default NewUser;