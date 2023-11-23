import React from 'react';

import styles from './SocialNetworkPage.module.scss';
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import Contacts from "../../components/Contacts/Contacts";
import AnalysisOfSocialNetworks from "../../components/AnalysisOfSocialNetworks/AnalysisOfSocialNetworks";
import ContactsSocialNetworks from "../../components/ContactsSocialNetworks/ContactsSocialNetworks";
import Profile from "../../components/Profile/Profile";

const SocialNetworkPage = () => {
    return (
        <div className={styles.socialNetworkPage}>
            <div className={styles.socialNetworkPage_column}>
                <Profile/>
                <Contacts/>
            </div>
            <div className={styles.socialNetworkPage_row}>
                <SocialNetworks/>
                <AnalysisOfSocialNetworks/>
                <ContactsSocialNetworks/>
            </div>
        </div>
    );
};

export default SocialNetworkPage;