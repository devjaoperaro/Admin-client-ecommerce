import React from 'react';
import styled from 'styled-components';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import {productRows} from '../../dummyData';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 4;
`;

const ProductNameDiv = styled.div`
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

const ContentDelete = styled.div`
    cursor: pointer;
`;


const ProductList: React.FC = () => {
    
    const [data, setData] = React.useState(productRows);

    const handleDelete = (id: number) => {
        // filtrar todos e mostrando retirando o diferente
        setData(data.filter(item => item.id !== id));
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Produto', width: 250, renderCell: (params) => {
            return (
                <ProductNameDiv>
                    <Image src={params.row.img} alt=""/>
                    {params.row.name}
                </ProductNameDiv>
            );
        } },
        {   field: 'stock', 
            headerName: 'Estoque', 
            width: 250 
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
        },
        {
            field: 'price',
            headerName: 'Preço',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link  to={`/product/${params.row.id}`}>
                            <Button>Editar</Button>
                        </Link>                            
                        <ContentDelete>
                            <DeleteIcon color='error' onClick={() => handleDelete(params.row.id)}/>
                        </ContentDelete>
                    </>
                );
            }
        },
    ];

    return (
        <Container>
           <DataGrid
                rows={data}
                style={{ fontSize: '17px', color: '#000', padding: '40px' }}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Container>
    );
}

export default ProductList;