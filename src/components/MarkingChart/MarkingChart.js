import React from 'react';

import styles from './MarkingChart.module.scss';

const MarkingChart = ({name, fill}) => {
    return (
        <div className={styles.markingChart}>
            <div style={{background: fill}} className={styles.markingChart_circle}></div>
            <p className={styles.markingChart_name}>{name}</p>
        </div>
    );
};

export default MarkingChart;