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
    color: #555;
    list-style-type: none;
`;

const DashboardLi = styled.li`
    margin: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 5px;

    &:hover {
        background-color: rgb(228, 228, 250);
    }
`;

const Icon = styled.div`
    margin-right: 5px;
    font-size: 20px;
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
                </DashboardUl>
                <DashboardUl>
                    <DashboardLi>
                        <ShowChartIcon />
                        Analytics
                    </DashboardLi>
                </DashboardUl>
                <DashboardUl>
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
                    <DashboardLi>
                        <Icon>
                            <GroupIcon />
                        </Icon>
                        Users
                    </DashboardLi>
                </DashboardUl>
                <DashboardUl>
                    <DashboardLi>
                        <Icon>
                            <StorefrontIcon/>
                        </Icon>
                        Products
                    </DashboardLi>
                </DashboardUl>
                <DashboardUl>
                    <DashboardLi>
                        <Icon>
                            <AttachMoneyIcon/>
                        </Icon>
                        Transactions
                    </DashboardLi>
                </DashboardUl>
                <DashboardUl>
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
                </DashboardUl>
                <DashboardUl>
                    <DashboardLi>
                        <Icon>
                            <DynamicFeedIcon/>
                        </Icon>
                        Feedback
                    </DashboardLi>
                </DashboardUl>
                <DashboardUl>
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
                </DashboardUl>
                <DashboardUl>
                    <DashboardLi>
                        <Icon>
                            <ShowChartIcon />
                        </Icon>
                        Analytics
                    </DashboardLi>
                </DashboardUl>
                <DashboardUl>
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