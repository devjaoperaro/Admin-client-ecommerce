import React from 'react';
import styled from 'styled-components';
import UserIcon from '@material-ui/icons/Person';
import UploadIcon from '@material-ui/icons/CloudUpload';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import { Link } from 'react-router-dom';

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

const Widget = styled.div`
    display: flex;
    margin: 0px 20px;
`;

const WidgetSm = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 30px;
    margin-right: 20px;
`;

const ProfileName = styled.div`
    display: flex;
    margin-bottom: 25px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 25px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Name = styled.span`
    margin-bottom: 5px;
    font-weight: 600; 
    font-size: 20px;
`;

const Profession = styled.span`
    color: #555;
`;

const DetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    color: #555;
`;

const TitleDatail = styled.span`
   color: #979797;
   font-weight: 600;
   margin-bottom: 20px;

`;

const Describe = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    color: #1d1a1a;
    
    &:last-child {
        margin-bottom: 0px;
    }
`;

const IconDescribe = styled.span`
    margin-right: 15px;
`;



// WIDGET MAIOR

const WidgetLg = styled.div`
    flex: 4;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 30px;
`;

const TitleEdit = styled.span`
    font-weight: 600;
    font-size: 30px;
`;

const ContentEdit = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
`;

const Edit = styled.div`
    display: flex;
    flex-direction: column;
    
`;
const Username = styled.span`
    color: #514d4d;
    font-weight: 600;
    margin-bottom: 20px;        
`;

const Input = styled.input`
    border: none;
    width: 300px;
    height: 30px;
    border-bottom: 1px solid #979797;
    margin-bottom: 15px;
    outline:none;

    &:focus {
        border-bottom: 2px solid #0E2B47;
    }
`;

const Upload = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageUpload = styled.img`
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
    padding: 10px;
    color: #ffffff;
    background-color: #0e2b47;
    font-size: 15px;
    cursor: pointer;
`;


const User: React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>Editar Usuario</Title>
                <Link to={'/newUser'}>
                    <ButtonCreate>Create</ButtonCreate>
                </Link>
            </Content>
            <Widget>
                <WidgetSm>
                    <ProfileName>
                        <Image src={'https://www.estrelando.com.br/uploads/2016/06/13/aryastark-1465820974.540x515.jpg'}/>
                        <Wrapper>
                            <Name>Anna Becker</Name>
                            <Profession>Software Engineer</Profession>
                        </Wrapper>
                    </ProfileName>
                    <DetailsContent>
                        <TitleDatail>Detalhes da conta</TitleDatail>
                        <Describe>
                            <IconDescribe>
                                <UserIcon/>
                            </IconDescribe>
                            annabeck99
                        </Describe>
                        <Describe>
                            <IconDescribe>
                                <CalendarTodayIcon/>
                            </IconDescribe>
                            10.12.1999
                        </Describe>
                        <TitleDatail>Detalhes de contato</TitleDatail>
                        <Describe>
                            <IconDescribe>
                                <PhoneIphoneIcon/>
                            </IconDescribe>
                            (43)98888-8888    
                        </Describe>
                        <Describe>
                            <IconDescribe>
                                <EmailIcon/>
                            </IconDescribe>
                            annabeck99@gmail.com
                        </Describe>
                        <Describe>
                            <IconDescribe>
                                <LocationSearchingIcon/>
                            </IconDescribe>
                            New York | USA
                        </Describe>
                    </DetailsContent>
                </WidgetSm>
                <WidgetLg>
                    <TitleEdit>Editar</TitleEdit>
                    <ContentEdit>
                        <Edit>
                            <Username>Nome usuario</Username>
                            <Input type="text" placeholder="Nome usuario" />
                            
                            <Username>Nome</Username>
                            <Input type="text" placeholder="Nome" />

                            <Username>Email</Username>
                            <Input type="email" placeholder="Email" />

                            <Username>Fone</Username>
                            <Input type="number" placeholder="Fone" />

                            <Username>Endereço</Username>
                            <Input type="text" placeholder="Endereço" />
                        </Edit>
                        <Upload>
                            <ContainerImage>
                                <ImageUpload src={'https://m.extra.globo.com/incoming/24667028-9dc-2dd/w367h550-PROP/ext_priscilla.jpg'}/>
                                    <Icon>
                                        <UploadIcon/>
                                    </Icon>
                            </ContainerImage>
                            <ButtonUpdate>Atualizar</ButtonUpdate>
                        </Upload>
                    </ContentEdit>
                </WidgetLg>
            </Widget>
        </Container>         
    );
};

export default User;