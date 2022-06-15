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
    flex-direction: column;
`;

const UploadImage = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputFile = styled.input`
    margin-bottom: 20px;
    font-size: 15px;
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
    width: 20%;
    cursor: pointer;
    margin-top: 70px;
`;

const NewProduct: React.FC = () => {
    return (
        <Container>
            <Title>Novo Produto</Title>

            <Form>
                <UploadImage>
                    <Label>Imagem</Label>
                    <InputFile type='file' id='file'/>
                </UploadImage>

                <ContentInput>
                    <Label>Nome</Label>
                    <Input type='text'/>
                </ContentInput>
                {/* description */}
                <ContentInput>
                    <Label>Descrição</Label>
                    <Input type='text'/>
                </ContentInput>
                {/* price */}
                <ContentInput>
                    <Label>Preço</Label>
                    <Input type='number'/>
                </ContentInput>
                {/* estoque */}
                <ContentInput>
                    <Label>Estoque</Label>
                    <Input type='number'/>
                </ContentInput>
            </Form>
            <ButtonCreate>Criar</ButtonCreate>
        </Container>
    );
};

export default NewProduct;