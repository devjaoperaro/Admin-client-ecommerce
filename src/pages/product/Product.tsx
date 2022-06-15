import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Chart from '../../components/Chart';
import { productData } from '../../dummyData';
import UploadIcon from '@material-ui/icons/CloudUpload';

const Container = styled.div`
    flex: 4;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
`;

const Title = styled.h1`
    font-weight: 600;
`;

const ButtonCreate = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    background-color: #5dba84;
    color: #ffffff;
    font-size: 15px;
`;

const Wrapper = styled.div`
    display: flex;
`;

const WrapperChart = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 30px;
    margin: 0 30px 0px 30px;
`;

const WrapperDescProduct = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 30px;
`;

const ContentImg = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 20px 5px 20px;
`;

const Image = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
`;

const NameProduct = styled.h6`
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
`;

const ContentDescricaoProduct = styled.div`
    margin-top: 10px;
`;

const ProductInfoItem = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin: 10px 40px 10px 40px;
`;

const ProductInfoKey = styled.span`
    font-weight: 600;
`;

const ProductInfoValue = styled.span`
    font-size: 18px;
    font-weight: 300;
`;

const ProductBottom = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 25px;
    margin: 50px 30px 0px 30px;
`;

const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`;

const ProductFormLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-left: 25px;
`;

const LabelProduct = styled.label`
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 16px;
`;

const InputProduct = styled.input`
    border: none;
    font-size: 17px;
    padding-left: 10px;
    height: 30px;
    border-bottom: 1px solid #979797;
    margin-bottom: 15px;
    outline:none;

    &:focus {
        border-bottom: 2px solid #0E2B47;
    }
`;

const InputSelect = styled.select`
    margin-bottom: 15px;
    font-size: 16px;

    &:last-child {
        margin-bottom: 0px;
    }
`;

const InputOption = styled.option`
    font-size: 16px;
`;

const ProductFormRight = styled.div`
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ImageUpload = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageUp = styled.img`
    width: 120px;
    height: 150px;
    border-radius: 10px;
    object-fit: cover;
`;

const Icon = styled.span`
    margin-left: 15px;
    cursor: pointer;
`;

const ButtonUpdate = styled.button`
    border: none;
    border-radius: 10px;
    padding: 7px;
    color: #ffffff;
    background-color: #0e2b47;
    font-size: 15px;
    cursor: pointer;
    text-align: center;
    margin-top: 25px;
    width: 160px;
`;

const Product: React.FC = () => (
    <Container>
        <Content>
            <Title>Editar Usuario</Title>
            <Link to={'/newProduct'}>
                <ButtonCreate>Create</ButtonCreate>
            </Link>
        </Content>
        <Wrapper>
            <WrapperChart>
                <Chart data={productData} dataKey='Sales' title='Sales Performance' grid />
            </WrapperChart>
            <WrapperDescProduct>
                <ContentImg>
                    <Image src={'https://s2.glbimg.com/0103TSiCkq17j3uaJcsbR3BXFqA=/0x0:643x443/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/3/Y/ATt8t9Rvqct7cxU9jccw/captura-de-tela-2020-04-20-as-13.58.23.png'} />
                    <NameProduct>Apple Airpods</NameProduct>
                </ContentImg>
                <ContentDescricaoProduct>
                    <ProductInfoItem>
                       <ProductInfoKey>id:</ProductInfoKey>
                       <ProductInfoValue>123</ProductInfoValue> 
                    </ProductInfoItem>
                    <ProductInfoItem>
                       <ProductInfoKey>Vendas:</ProductInfoKey>
                       <ProductInfoValue>512</ProductInfoValue> 
                    </ProductInfoItem>
                    <ProductInfoItem>
                       <ProductInfoKey>Ativo:</ProductInfoKey>
                       <ProductInfoValue>Sim</ProductInfoValue> 
                    </ProductInfoItem>
                    <ProductInfoItem>
                       <ProductInfoKey>Em estoque:</ProductInfoKey>
                       <ProductInfoValue>Não</ProductInfoValue> 
                    </ProductInfoItem>
                </ContentDescricaoProduct>
            </WrapperDescProduct>
        </Wrapper>
        <ProductBottom>
            <ProductForm>
                <ProductFormLeft>
                    <LabelProduct>Nome do produto</LabelProduct>
                    <InputProduct type='text' placeholder='Apple AirPod'/>

                    <LabelProduct>Descrição</LabelProduct>
                    <InputProduct type='text' placeholder='Descrição'/>
                    
                    <LabelProduct>Preço</LabelProduct>
                    <InputProduct type='number' placeholder='Preço'/>

                    <LabelProduct>Categoria</LabelProduct>
                    <InputProduct type='text' placeholder='Camiseta, masculino'/>

                    <LabelProduct>Em estoque</LabelProduct>
                    <InputSelect>
                        <InputOption>Sim</InputOption>
                        <InputOption>Não</InputOption>
                    </InputSelect>
                    {/* <LabelProduct>Ativo</LabelProduct>
                    <InputSelect>
                        <InputOption>Sim</InputOption>
                        <InputOption>Não</InputOption>
                    </InputSelect> */}
                </ProductFormLeft>
                <ProductFormRight>
                    <ImageUpload>
                        <ImageUp src={'https://s2.glbimg.com/0103TSiCkq17j3uaJcsbR3BXFqA=/0x0:643x443/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/3/Y/ATt8t9Rvqct7cxU9jccw/captura-de-tela-2020-04-20-as-13.58.23.png'}/>
                        <Icon>
                            <UploadIcon/>
                        </Icon>
                    </ImageUpload>
                    <ButtonUpdate>Atualizar</ButtonUpdate>
                </ProductFormRight>
            </ProductForm>
        </ProductBottom>
    </Container>
);

export default Product;