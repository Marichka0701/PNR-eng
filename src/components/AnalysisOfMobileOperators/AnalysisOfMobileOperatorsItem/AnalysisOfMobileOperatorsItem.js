import React from 'react';

import styles from './AnalysisOfMobileOperatorsItem.module.scss';

const AnalysisOfMobileOperatorsItem = ({operator}) => {
    return (
        <div className={styles.analysisOfMobileOperatorsItem}>
            <img src={require(`../../../assets/images/mobileOperators/${operator}.svg`)} alt={`${operator} icon`} />
        </div>
    );
};

export default AnalysisOfMobileOperatorsItem;