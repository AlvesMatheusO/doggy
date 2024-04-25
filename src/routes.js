import Auth from './pages/Auth';
import Home from './pages/Home';
import Food from './pages/FoodDetails'
import React from 'react';
import Historic from './pages/Historic';
import {
    createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([  
    {
        path: "/",
        element: <Auth />, 
    },
    {
        path: "/home",
        element:<Home />
    },
    {
        path: "/details/:id",
        element: <Food />
    },
    {
        path: "/historic",
        element: <Historic />,
    },
]);




export default router;