import {createBrowserRouter, Navigate} from "react-router-dom";
import {MAIN_ROUTES} from "./mainRoutes";

export const router = createBrowserRouter([
    {
        index: true,
        element: <Navigate to={MAIN_ROUTES.HOME}/>
    },
    {
        path: '',
        // element:
    }
])