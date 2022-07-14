import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import Client from '../assets/client.jpg';
import { userRequest } from '../requestMethods';

const Container = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`;

const Title = styled.h1`
    font-weight: 600;
    margin: 5px 0px 20px 0px;
`;

const ListaUL = styled.ul`
    list-style: none;
    padding: 0px;
    margin-top: 30px;
`;

const ListaLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0px 20px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;  
`;

const WidgetUserMember = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserName = styled.h5`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
`;

const UserTitle = styled.h5`
    margin: 0;
    font-weight: 500;
    font-size: 14px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
`;

const Icon = styled.span`
    font-size: 16px !important;
    margin-right: 5px;
`;

const WidgetSm: React.FC = () => {
    
    const [ users, setUsers ] = React.useState<any[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await userRequest.get('/user/find/?new=true');
                setUsers(response.data);
                
            } catch (error) {
                console.log(error)                
            }
        }
        getUsers();
    }, []);

    return(
        <Container>
            <Title>New Join Members</Title>
            <ListaUL>
                {users?.map((item: any) => (
                    <ListaLi key={item._id}>
                        <Image src={item.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71Tc9Tk2q1eJUUlX1bXhWrc0-g8O9xnAplw&usqp=CAU'}/>
                        <WidgetUserMember>
                            <UserName>{item.username}</UserName>
                        </WidgetUserMember>
                        <Button>
                            <RemoveRedEyeIcon/>
                            Display
                        </Button>
                    </ListaLi>
                ))}
            </ListaUL>
        </Container>
    );
};

export default WidgetSm;