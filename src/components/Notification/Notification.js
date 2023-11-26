import React from 'react';

import styles from './Notification.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import map from "../../assets/images/map-notifications.svg";

const Notification = () => {
    return (
        <div className={styles.notification}>
            <div className={styles.notification_titleContainer}>
                <h3>Notification: suspicious passengers on board</h3>
                <button>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.notification_map}>
                <img src={map} alt="map suspicious passengers on board"/>
            </div>
        </div>
    );
};

export default Notification;