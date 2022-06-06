import React from 'react';
import styled from 'styled-components';
import FeatureInfo from '../components/FeatureInfo';

const Container = styled.div`
    flex: 4;
`;

const Home: React.FC = () => {
    return (
        <Container>
            <FeatureInfo/>
        </Container>
    )
};

export default Home;