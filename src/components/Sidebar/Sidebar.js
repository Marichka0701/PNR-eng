import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import styles from './Sidebar.module.scss';
import plus from '../../assets/images/sidebar/plus.svg';
import passenger from '../../assets/images/sidebar/passenger.svg';
import passengerActive from '../../assets/images/sidebar/passenger-active.svg';
import database from '../../assets/images/sidebar/database-search.svg';
import databaseActive from '../../assets/images/sidebar/database-search-active.svg';
import notifications from '../../assets/images/sidebar/notifications.svg';
import notificationsActive from '../../assets/images/sidebar/notifications-active.svg';
import divider from '../../assets/images/sidebar/divider.svg';
import {MAIN_ROUTES} from "../../routing/mainRoutes";

const Sidebar = () => {
    const [selectedOption, setSelectedOption] = useState('Passenger');

    const navigate = useNavigate();

    const handleSelectOption = (option) => {
        setSelectedOption(option);

        switch (option) {
            case 'Passenger': {
                navigate(MAIN_ROUTES.PASSENGER);
                break;
            }
            case 'Database search': {
                navigate(MAIN_ROUTES.DATABASE_SEARCH);
                break;
            }
            case 'Notifications': {
                navigate(MAIN_ROUTES.NOTIFICATIONS);
                break;
            }
            case 'Social networks': {
                navigate(MAIN_ROUTES.SOCIAL_NETWORKS);
                break;
            }
            case 'Operational info': {
                navigate(MAIN_ROUTES.OPERATIONAL_INFO);
                break;
            }
            case 'Transport': {
                navigate(MAIN_ROUTES.TRANSPORT);
                break;
            }
            case 'Mobile operators': {
                navigate(MAIN_ROUTES.MOBILE_OPERATORS);
                break;
            }
        }
    }

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

                <div
                    onClick={() => handleSelectOption('Passenger')}
                    className={`${styles.sidebar_options_item} ${selectedOption === 'Passenger' ? styles.active : ''}`}
                >
                    <img src={selectedOption === 'Passenger' ? passengerActive : passenger} alt="passenger icon"/>
                    <p>Passenger</p>
                </div>

                <div
                    onClick={() => handleSelectOption('Database search')}
                    className={`${styles.sidebar_options_item} ${selectedOption === 'Database search' ? styles.active : ''}`}
                >
                    <img src={selectedOption === 'Database search' ? databaseActive : database} alt="database search icon"/>
                    <p>Database search</p>
                </div>

                <div
                    onClick={() => handleSelectOption('Notifications')}
                    className={`${styles.sidebar_options_item} ${selectedOption === 'Notifications' ? styles.active : ''}`}
                >
                    <img src={selectedOption === 'Notifications' ? notificationsActive : notifications} alt="notifications icon"/>
                    <p>Notifications</p>
                </div>
            </div>

            <img src={divider} alt="divider icon"/>

            <div className={styles.sidebar_additionalOptions}>
                <div
                    className={`${styles.sidebar_additionalOptions_item} ${selectedOption === 'Social networks' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Social networks')}
                >
                    <div></div>
                    <p>Social networks</p>
                </div>

                <div
                    className={`${styles.sidebar_additionalOptions_item} ${selectedOption === 'Operational info' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Operational info')}
                >
                    <div></div>
                    <p>Operational info</p>
                </div>

                <div
                    className={`${styles.sidebar_additionalOptions_item} ${selectedOption === 'Transport' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Transport')}
                >
                    <div></div>
                    <p>Transport</p>
                </div>

                <div
                    className={`${styles.sidebar_additionalOptions_item} ${selectedOption === 'Mobile operators' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Mobile operators')}
                >
                    <div></div>
                    <p>Mobile operators</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;