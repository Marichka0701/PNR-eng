import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import styles from './IndustryEvaluationCriteria.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";

const IndustryEvaluationCriteria = () => {
    const data = [
        { label: 'Group A', value: 400 },
        { label: 'Group B', value: 300 },
        { label: 'Group C', value: 300 },
        { label: 'Group D', value: 200 },
    ];

    return (
        <div className={styles.industryEvaluationCriteria}>
            <div className={styles.industryEvaluationCriteria_titleContainer}>
                <h3>Passenger traffic</h3>
                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div>
                <PieChart
                    series={[
                        {
                            paddingAngle: 5,
                            innerRadius: 60,
                            outerRadius: 80,
                            data,
                        },
                    ]}
                    margin={{ right: 5 }}
                    width={200}
                    height={200}
                    legend={{ hidden: true }}
                />
                {/*<PieChart*/}
                {/*    series={[*/}
                {/*        {*/}
                {/*            startAngle: -90,*/}
                {/*            endAngle: 90,*/}
                {/*            paddingAngle: 5,*/}
                {/*            innerRadius: 60,*/}
                {/*            outerRadius: 80,*/}
                {/*            data,*/}
                {/*        },*/}
                {/*    ]}*/}
                {/*    margin={{ right: 5 }}*/}
                {/*    width={200}*/}
                {/*    height={200}*/}
                {/*    slotProps={{*/}
                {/*        legend: { hidden: true },*/}
                {/*    }}*/}
                {/*/>*/}
            </div>
        </div>
    );
};

export default IndustryEvaluationCriteria;