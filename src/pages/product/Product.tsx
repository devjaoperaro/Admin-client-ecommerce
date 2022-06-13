import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Chart from '../../components/Chart';
import { productData } from '../../dummyData';

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

const WrapperChart = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`;

const Product: React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>Editar Usuario</Title>
                <Link to={'/newProduct'}>
                    <ButtonCreate>Create</ButtonCreate>
                </Link>
            </Content>
            <WrapperChart>
                <Chart data={productData} dataKey='Sales' title='Sales Performance' grid/>
            </WrapperChart>
        </Container>
    )
};

export default Product;