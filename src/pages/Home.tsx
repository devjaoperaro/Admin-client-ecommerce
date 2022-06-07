import React from 'react';
import styled from 'styled-components';
import Chart from '../components/Chart';
import FeatureInfo from '../components/FeatureInfo';
import WidgetLg from '../components/WidgetLg';
import WidgetSm from '../components/WidgetSm';
import { userData } from '../dummyData';

const Container = styled.div`
    flex: 4;
`;

const Widgets = styled.div`
    display: flex;
    margin: 20px;
`;

const Home: React.FC = () => {
    return (
        <Container>
            <FeatureInfo/>
            <Chart data={userData} title='DADOS DOS USUARIOS' grid dataKey={'Active User'}/>
            <Widgets>
                <WidgetSm/>
                <WidgetLg/>
            </Widgets>
        </Container>
    )
};

export default Home;