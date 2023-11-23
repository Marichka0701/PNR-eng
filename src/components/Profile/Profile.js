import React from 'react';

import styles from './Profile.module.scss';
import profilePhoto from '../../assets/images/moduleReceivingData/passenger-photo.svg';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <img className={styles.profile_photo} src={profilePhoto} alt="profile photo"/>
            <button className={styles.profile_button}>Profile</button>

            <div className={styles.profile_passengerInfo}>
                <p>Seat number</p>
                <p>F-16</p>
            </div>
        </div>
    );
};

export default Profile;