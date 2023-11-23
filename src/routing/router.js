import {createBrowserRouter, Navigate} from "react-router-dom";

import {MAIN_ROUTES} from "./mainRoutes";
import MobileOperatorsPage from "../pages/MobileOperatorsPage/MobileOperatorsPage";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ModuleReceivingData from "../pages/ModuleReceivingData/ModuleReceivingData";
import TransportPage from "../pages/TransportPage/TransportPage";
import DatabaseSearchPage from "../pages/DatabaseSearchPage/DatabaseSearchPage";
import NotificationsPage from "../pages/NotificationsPage/NotificationsPage";
import SocialNetworkPage from "../pages/SocialNetworkPage/SocialNetworkPage";

export const router = createBrowserRouter([
    // {
    //     index: true,
    //     element: <Navigate to={MAIN_ROUTES.HOME}/>
    // },
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={MAIN_ROUTES.PASSENGER}/>
            },
            {
                path: MAIN_ROUTES.PASSENGER,
                element: <ModuleReceivingData/>,
            },
            {
                path: MAIN_ROUTES.DATABASE_SEARCH,
                element: <DatabaseSearchPage/>,
            },
            {
                path: MAIN_ROUTES.NOTIFICATIONS,
                element: <NotificationsPage/>
            },
            {
                path: MAIN_ROUTES.SOCIAL_NETWORKS,
                element: <SocialNetworkPage/>
            },
            {
                path: MAIN_ROUTES.MOBILE_OPERATORS,
                element: <MobileOperatorsPage/>,
            },
            {
                path: MAIN_ROUTES.TRANSPORT,
                element: <TransportPage/>,
            }
        ]
    },
])