import * as ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Food from './pages/FoodDetails'
import React from 'react';
import Historic from './pages/Historic';
import {
    createBrowserRouter,
} from "react-router-dom";
import Header from './components/Header';


const router = createBrowserRouter([  
    {
        path: "/",
        element: <Home />, 
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