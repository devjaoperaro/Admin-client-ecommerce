import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Chart from '../components/Chart';
import FeatureInfo from '../components/FeatureInfo';
import WidgetLg from '../components/WidgetLg';
import WidgetSm from '../components/WidgetSm';
import { userData } from '../dummyData';
import { userRequest } from '../requestMethods';

const Container = styled.div`
    flex: 4;
`;

const Widgets = styled.div`
    display: flex;
    margin: 20px;
`;

const Home: React.FC = () => {

    const [userStats, setUserStats] = React.useState<any[]>([]);

    const MONTHS = useMemo(() => [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
    ],[]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const response = await userRequest.get('user/stats');

                response.data.map((item: any) => {
                    setUserStats((prev) => [...prev, {name: MONTHS[item._id -1], "Active User": item.total },
                    ]);
                })
            } catch (error) {
                console.log(error);
            } 
        }
        getStats();
    },[MONTHS]);

    console.log(userStats);

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