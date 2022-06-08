import React from 'react';
import styled from 'styled-components';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import {userRows} from '../dummyData';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 4;
`;

const UsernameDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const Button = styled.button`
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 7px 10px;
    background-color: #3bb077;
    color: white;
    margin-right: 20px;
`;


const UserList: React.FC = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Nome', width: 250, renderCell: (params) => {
            return (
                <UsernameDiv>
                    <Image src={params.row.avatar} alt=""/>
                    {params.row.username}
                </UsernameDiv>
            );
        } },
        { field: 'email', headerName: 'Email', width: 250 },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
        },
        {
            field: 'transaction',
            headerName: 'Volume Transação',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link  to={`/user/${params.row.id}`}>
                            <Button>Editar</Button>
                        </Link>                            
                
                        <DeleteIcon color='error' />
                    </>
                );
            }
        },
    ];

    return (
        <Container>
            <DataGrid
                rows={userRows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Container>
    );
};

export default UserList;
