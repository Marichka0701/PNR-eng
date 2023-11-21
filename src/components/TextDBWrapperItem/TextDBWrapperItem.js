import React from 'react';

import styles from './TextDBWrapperItem.module.scss';

const TextDBWrapperItem = ({label, textDb}) => {
    return (
        <div className={styles.monthlyPassengerLoadItem}>
            <p className={styles.monthlyPassengerLoadItem_label}>{label}</p>
            <p className={styles.monthlyPassengerLoadItem_textDb}>{textDb}</p>
        </div>
    );
};

export default TextDBWrapperItem;