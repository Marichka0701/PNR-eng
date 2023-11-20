import React from 'react';

import styles from './Sidebar.module.scss';
import plus from '../../assets/images/sidebar/plus.svg';
import passenger from '../../assets/images/sidebar/passenger.svg';
import database from '../../assets/images/sidebar/database-search.svg';
import notifications from '../../assets/images/sidebar/notifications.svg';
import divider from '../../assets/images/sidebar/divider.svg';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_options}>
                <div className={styles.sidebar_options_addNewPassenger}>
                    <img src={plus} alt="plus button icon"/>
                    <div>
                        <p>New passenger</p>
                        <p>Manual input</p>
                    </div>
                </div>

                <div className={styles.sidebar_options_item}>
                    <img src={passenger} alt="passenger icon"/>
                    <p>Passenger</p>
                </div>

                <div className={styles.sidebar_options_item}>
                    <img src={database} alt="database search icon"/>
                    <p>Database search</p>
                </div>

                <div className={styles.sidebar_options_item}>
                    <img src={notifications} alt="notifications icon"/>
                    <p>Notifications</p>
                </div>
            </div>

            <img src={divider} alt="divider icon"/>

            <div className={styles.sidebar_additionalOptions}>
                <div className={styles.sidebar_additionalOptions_item}>
                    <div></div>
                    <p>Social networks</p>
                </div>

                <div className={styles.sidebar_additionalOptions_item}>
                    <div></div>
                    <p>Operational info</p>
                </div>

                <div className={styles.sidebar_additionalOptions_item}>
                    <div></div>
                    <p>Transport</p>
                </div>

                <div className={styles.sidebar_additionalOptions_item}>
                    <div></div>
                    <p>Mobile operators</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;