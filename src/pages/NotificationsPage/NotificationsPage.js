import React from 'react';

import styles from './NotificationsPage.module.scss';
import Notification from "../../components/Notification/Notification";
import DetailedInfoAboutFlight from "../../components/DetailedInfoAboutFlight/DetailedInfoAboutFlight";
import passenger from "../../assets/images/moduleReceivingData/passenger-photo.svg";

const NotificationsPage = () => {
    return (
        <div className={styles.notificationsPage}>
            <Notification/>

            <div className={styles.notificationsPage_info}>
                <DetailedInfoAboutFlight/>

                <div className={styles.notificationsPage_info_profile}>
                    <img src={passenger} alt="passenger icon"/>

                    <div className={styles.notificationsPage_info_profile_seat}>
                        <p>seat number</p>
                        <p>F-16</p>
                    </div>

                    <button>Profile</button>
                </div>
            </div>
        </div>
    );
};

export default NotificationsPage;