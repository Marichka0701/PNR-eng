import React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { PieChart, Pie, Cell } from 'recharts';

import styles from './PassengerTraffic.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import { Doughnut } from 'react-chartjs-2';

// import { Chart, DoughnutController, ArcElement, CategoryScale, LinearScale } from 'chart.js';
//
// Chart.register(DoughnutControllernutController, ArcElement, CategoryScale, LinearScale);

// const data = {
//     labels: ['Air', 'Rail', 'Bus'],
//     datasets: [
//         {
//             data: [1400, 400, 2200],
//             backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
//             hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
//         }
//     ]
// };
// const dataA = [
//     { value: 67, label: 'A' },
//     { value: 100 - 67, label: '' },
// ];
//
// const dataB = [
//     { value: 20, label: 'B' },
//     { value: 100 - 20, label: '' },
// ];
//
// const dataC = [
//     { value: 13, label: 'C' },
//     { value: 100 - 13, label: '' },
// ];
//
// const size = {
//     width: 400,
//     height: 200,
// };
//
// const StyledText = styled('text')(({ theme }) => ({
//     fill: theme.palette.text.primary,
//     textAnchor: 'middle',
//     dominantBaseline: 'central',
//     fontSize: 20,
// }));
//
// function PieCenterLabel({ children }) {
//     const { width, height, left, top } = useDrawingArea();
//     return (
//         <StyledText x={left + width / 2} y={top + height / 2}>
//             {children}
//         </StyledText>
//     );
// }
// ---------------------------------------------
// const size = {
//     width: 400,
//     height: 200,
// };

// const StyledText = styled('text')(({ theme }) => ({
//     fill: theme.palette.text.primary,
//     textAnchor: 'middle',
//     dominantBaseline: 'central',
//     fontSize: 20,
// }));

// function PieCenterLabel({ children }) {
//     const { width, height, left, top } = useDrawingArea();
//     return (
//         <StyledText x={left + width / 2} y={top + height / 2}>
//             {children}
//         </StyledText>
//     );
// }

// const dataA = [{ value: 67, label: 'A' }, { value: 33, label: 'Empty' }];
// const dataB = [{ value: 20, label: 'B' }, { value: 80, label: 'Empty' }];
// const dataC = [{ value: 13, label: 'C' }, { value: 87, label: 'Empty' }];


// ---------------------------------------------
const data = [
    { name: 'Air', value: 1400 },
    { name: 'Rail', value: 400 },
    { name: 'Bus', value: 2200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
                                   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
                               }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const PassengerTraffic = () => {
    return (
        <div className={styles.passengerTraffic}>
            <div className={styles.passengerTraffic_titleContainer}>
                <h3>Passenger traffic</h3>
                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div>
                {/*<Doughnut data={data} />*/}
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                </PieChart>
            </div>
            {/*<div>*/}
            {/*    <PieChart series={[{ data: dataA, innerRadius: 80 }]} {...size}>*/}
            {/*        <PieCenterLabel>A</PieCenterLabel>*/}
            {/*    </PieChart>*/}

            {/*    <PieChart series={[{ data: dataB, innerRadius: 80 }]} {...size}>*/}
            {/*        <PieCenterLabel>B</PieCenterLabel>*/}
            {/*    </PieChart>*/}

            {/*    <PieChart series={[{ data: dataC, innerRadius: 80 }]} {...size}>*/}
            {/*        <PieCenterLabel>C</PieCenterLabel>*/}
            {/*    </PieChart>*/}
            {/*</div>*/}
        </div>
    );
};

export default PassengerTraffic;