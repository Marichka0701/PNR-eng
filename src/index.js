import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainLayout from "./layouts/MainLayout/MainLayout";
import {RouterProvider} from "react-router-dom";
import {router} from "./routing/router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

