import React, { useEffect } from 'react';
import styled from 'styled-components';
import Client2 from '../assets/cliente2.jpg';
import { userRequest } from '../requestMethods';
import { formatDistance, parseISO  } from 'date-fns';
import pt from 'date-fns/locale/pt-BR'

interface ButtonProps {
    type: string
}


const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 600;
    margin: 5px 0px 10px 0px;
`;

const Table = styled.table`
    width: 100%;
    border-spacing: 15px;
`;

const TableTr = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

const TableTh = styled.th`

    &:first-child {
        margin-left: 40px;
    }
    &:nth-child(2) {
        margin-left: 100px;
    }
    &:nth-child(3) {
        margin-left: 40px;
    }
`;

const TableTd = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const UserName = styled.span`
    text-align: left;
`;

const CreateData = styled.span`
    text-align: left;
`;

const Amount = styled.span`
    text-align: left;
`;

const Button = styled.button<ButtonProps>`
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: ${props => props.type as string === 'Pendente' ? '#ffffff' : '#0aa50a'};
    background-color: #${props => props.type as string === 'Pendente' ? 'f36871' : 'e5faf2'};
`;



const WidgetLg: React.FC = () => {

    const [ orders, setOrders ] = React.useState<any[]>([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await userRequest.get('/order/find');
                setOrders(response.data);
                
            } catch (error) {
                console.log(error)                
            }
        }
        getOrders();
    }, []);

    return(
        <Container>
            <Title>Ultimas Transações</Title>
            <Table>
                <TableTr>
                    <TableTh>Customer</TableTh>
                    <TableTh>Date</TableTh>
                    <TableTh>Amount</TableTh>
                    <TableTh>Status</TableTh>
                </TableTr>
                { orders.map((item: any) => (
                    <TableTr key={item._id}>
                        <TableTd>
                            {/* <Image src={Client2}/> */}
                            <UserName>{item.userId}</UserName>
                        </TableTd>
                        <TableTd>
                            <CreateData>{ formatDistance(parseISO(item.createdAt), new Date(), {
                            locale: pt,
                            addSuffix: true
                        }) }</CreateData>
                        </TableTd>
                        <TableTd>
                            <Amount>R$ {item.amount},00</Amount>
                        </TableTd>
                        <TableTd>
                            <Button type={item.status}>{item.status}</Button>
                        </TableTd>
                    </TableTr>
                ))}
            </Table>
        </Container>
    );
};

export default WidgetLg;