import React from 'react';
import styled from '@emotion/styled';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ChartTitle = styled.h3`
    margin-bottom: 20px;
`;


interface ChartProps {
    title: any;
    data: any;
    dataKey: any;
    grid: any;
}

const Chart: React.FC<ChartProps> = ({title, data, dataKey, grid}: ChartProps) => {
  return (
    <Container>
      <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey={'name'} stroke='#5550bd'/>
            <Line type='monotone' dataKey={dataKey} stroke='#5550bd'/>
            <Tooltip/>
            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray={'5 5'}/>}
          </LineChart>
        </ResponsiveContainer>
    </Container>
  );
};


export default Chart;