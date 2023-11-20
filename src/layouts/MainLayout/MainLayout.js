import React from 'react';

import styles from './MainLayout.module.scss';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ModuleReceivingData from "../../pages/ModuleReceivingData/ModuleReceivingData";

const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <Header/>

            <div className={styles.mainLayout_content}>
                <Sidebar/>
                <ModuleReceivingData/>
            </div>
        </div>
    );
};

export default MainLayout;