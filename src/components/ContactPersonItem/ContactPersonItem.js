import React from 'react';

import styles from './ContactPersonItem.module.scss';
import profile from "../../assets/images/profile-photo-social-network.svg";

const ContactPersonItem = () => {
    return (
        <div className={styles.contactPersonItem}>
            <img src={profile} alt="profile photo"/>
            <p>Gomer Ivaz</p>
        </div>
    );
};

export default ContactPersonItem;