import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;

const Wrapper = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 20px 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

`;

const Title = styled.h1`
    margin: 0px 0px 10px 0px;
    font-size: 25px;
    font-weight: 400;
`;

const FeatureMoneyContainer = styled.div`
    display: flex;

`;

const FeatureMoney = styled.div`
    margin-right: 15px;
`;

const FeatureMoneyRate = styled.div`
    /* flex: 4; */
`;

const FeaturedSub = styled.div`
    /* flex: 4; */
`;

const FeatureInfo: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Revanue</Title>
                <FeatureMoneyContainer>
                    <FeatureMoney>
                        R$ 2,500
                    </FeatureMoney>
                    <FeatureMoneyRate>
                        -11.4
                    </FeatureMoneyRate>
                </FeatureMoneyContainer>
                <FeaturedSub>Comparado com o ultimo mes</FeaturedSub>
            </Wrapper>
            <Wrapper>
                <Title>Sales</Title>
                <FeatureMoneyContainer>
                    <FeatureMoney>
                        R$ 2,500
                    </FeatureMoney>
                    <FeatureMoneyRate>
                        -11.4
                    </FeatureMoneyRate>
                </FeatureMoneyContainer>
                <FeaturedSub>Comparado com o ultimo mes</FeaturedSub>
            </Wrapper>
            <Wrapper>
                <Title>Sales</Title>
                <FeatureMoneyContainer>
                    <FeatureMoney>
                        R$ 2,500
                    </FeatureMoney>
                    <FeatureMoneyRate>
                        -11.4
                    </FeatureMoneyRate>
                </FeatureMoneyContainer>
                <FeaturedSub>Comparado com o ultimo mes</FeaturedSub>
            </Wrapper>
        </Container>
    );
};


export default FeatureInfo;