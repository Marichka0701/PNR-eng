import React from 'react';
import {Outlet} from "react-router-dom";

import styles from './MainLayout.module.scss';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <Header/>

            <div className={styles.mainLayout_content}>
                <Sidebar/>
                <div style={{padding: '65px 20px 0 240px', width: '100vw'}}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;