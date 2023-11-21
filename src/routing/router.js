import {createBrowserRouter, Navigate} from "react-router-dom";

import {MAIN_ROUTES} from "./mainRoutes";
import MobileOperatorsPage from "../pages/MobileOperatorsPage/MobileOperatorsPage";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ModuleReceivingData from "../pages/ModuleReceivingData/ModuleReceivingData";

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
                element: <Navigate to={MAIN_ROUTES.HOME}/>
            },
            {
                path: MAIN_ROUTES.HOME,
                element: <ModuleReceivingData/>,
            },
            {
                path: MAIN_ROUTES.MOBILE_OPERATORS,
                element: <MobileOperatorsPage/>,
            }
        ]
    },
])