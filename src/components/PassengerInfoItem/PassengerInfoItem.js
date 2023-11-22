import React from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './PassengerInfoItem.module.scss';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const PassengerInfoItem = () => {
    return (
        <div className={styles.passengerInfoItem}>
            <Checkbox {...label} />

            <div className={styles.passengerInfoItem_passengerInfo}>
                <p>Tekstovich</p>
                <p>Drago</p>
                <p>Markovich</p>
                <p>М</p>
                <p>25/06/1965</p>
                <p>Ukraine</p>
                <p>Active</p>
            </div>
        </div>
    );
};

export default PassengerInfoItem;