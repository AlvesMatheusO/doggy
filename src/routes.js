import * as ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Food from './pages/FoodDetails'
import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/details/:id",
        element: <Food />
    }
]);




export default router;