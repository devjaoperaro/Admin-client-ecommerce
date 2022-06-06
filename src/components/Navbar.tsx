import react from 'React';
import Badge from '@mui/material/Badge';
import styled from 'styled-components';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import myPicture from '../assets/my-pic.jpg';

const Container = styled.div`
    height: 80px;
    box-shadow: 0px 10px 5px -10px #111;  
`;

const Wrapper = styled.div`
    display: flex;
    padding: 0px 30px;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    color: #3250b5;
    font-size: 1.5em;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`;

const ContainerImage = styled.div`
    margin-left: 20px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`;

const Navbar: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>JOAO ADMIN</Logo>
                </Left>
                {/* <Center>dsad</Center> */}
                <Right>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon color="action" />
                    </Badge>
                    <Badge style={{marginLeft: 15, cursor: 'pointer'}} badgeContent={4} color="error">
                        <LanguageIcon color="action" />
                    </Badge>
                    <Badge style={{marginLeft: 15, cursor: 'pointer'}} color="primary">
                        <SettingsIcon color="action" />
                    </Badge>
                    <ContainerImage>
                        <Image src={myPicture}/>
                    </ContainerImage>
                </Right>
            </Wrapper>
        </Container>    
    )
};

export default Navbar;