import react from 'React';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import InsightsIcon from '@material-ui/icons/InsertChart';
import GroupIcon from '@material-ui/icons/Group';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';
import MailIcon from '@material-ui/icons/Mail';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ForumIcon from '@material-ui/icons/Forum';
import WorkIcon from '@material-ui/icons/Work';
import ReportIcon from '@material-ui/icons/Report';
import { Link, Route, Router } from 'react-router-dom';

interface DashboardProps {
    first: any;
}

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 98px);
    background-color: rgb(251, 251, 255);
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #ebe1e1; 
    }
    ::-webkit-scrollbar-thumb {
        background: #c7c4c4; 
        border-radius: 10px;
    }
    
`;

const Dashboard = styled.div<DashboardProps>`
    margin-top: ${props => props.first}px;
`;



const DashboardUl = styled.ul`
    padding-left: 40px;
    color: grey;
    list-style-type: none;
    font-size: 17px;
    font-weight: 600;
`;

const DashboardLi = styled.li`
    margin: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
    color: black;
    font-weight: 400;
    text-decoration: none;

    &:hover {
        background-color: rgb(228, 228, 250);
    }
`;

const Icon = styled.div`
    margin-right: 5px;
    font-size: 20px;
    color: gray;
`;

const Sidebar: React.FC = () => {
    return (
        <Container>
            <Dashboard first={20}>
                <DashboardUl>
                    Dashboard
                    <DashboardLi>
                        <Icon>
                            <HomeIcon />
                        </Icon>
                        Home
                    </DashboardLi>
                    
                    <DashboardLi>
                        <ShowChartIcon />
                        Analytics
                    </DashboardLi>
                
                    <DashboardLi>
                        <Icon>
                            <InsightsIcon/>
                        </Icon>
                        Sales
                    </DashboardLi>
                </DashboardUl>
            </Dashboard>
            <Dashboard first>
                <DashboardUl>
                    Quick Menu
                    <Link to={'/users'} style={{textDecoration: 'none', color: 'inherit'}}>
                        <DashboardLi>
                                <Icon>
                                    <GroupIcon />
                                </Icon>
                                Users
                        </DashboardLi>
                    </Link>
                
                    <Link to={'/product'} style={{textDecoration: 'none', color: 'inherit'}}>
                        <DashboardLi>
                            <Icon>
                                <StorefrontIcon/>
                            </Icon>
                            Products
                        </DashboardLi>
                    </Link>
                
                    <DashboardLi>
                        <Icon>
                            <AttachMoneyIcon/>
                        </Icon>
                        Transactions
                    </DashboardLi>
            
                    <DashboardLi>
                        <Icon>
                            <BarChartIcon/>
                        </Icon>
                        Reports
                    </DashboardLi>
                </DashboardUl>
            </Dashboard>
            <Dashboard first>
                <DashboardUl>
                    Notifications
                    <DashboardLi>
                        <Icon>
                            <MailIcon/>
                        </Icon>
                        Mail
                    </DashboardLi>
                
                    <DashboardLi>
                        <Icon>
                            <DynamicFeedIcon/>
                        </Icon>
                        Feedback
                    </DashboardLi>
                
                    <DashboardLi>
                        <Icon>
                            <ForumIcon/>
                        </Icon>
                        Messages
                    </DashboardLi>
                </DashboardUl>
            </Dashboard>
            <Dashboard first>
                <DashboardUl>
                    Staff
                    <DashboardLi>
                    <Icon>
                        <WorkIcon/>
                    </Icon>
                        Menage
                    </DashboardLi>
                
                    <DashboardLi>
                        <Icon>
                            <ShowChartIcon />
                        </Icon>
                        Analytics
                    </DashboardLi>
                
                    <DashboardLi>
                        <Icon>
                            <ReportIcon/>
                        </Icon>
                        Reports
                    </DashboardLi>
                </DashboardUl>
            </Dashboard>
        </Container>
    );
};

export default Sidebar;