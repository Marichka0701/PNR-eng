import React from 'react';

import styles from './DrugTraffic.module.scss';
import TextDBWrapperItem from "../TextDBWrapperItem/TextDBWrapperItem";

const DrugTraffic = () => {
    return (
        <div className={styles.drugTraffic}>
            <TextDBWrapperItem label={'Credit card'} textDb={'1234 0000 5678 0090'}/>
            <TextDBWrapperItem label={'Full name of the card holder'} textDb={'SHVKAT IVANOV'}/>
            <TextDBWrapperItem label={'card validity period'} textDb={'06/20'}/>
            <TextDBWrapperItem label={'credit card on the darknet'} textDb={'http://rechardsp4x6tdrh.onion '}/>
        </div>
    );
};

export default DrugTraffic;