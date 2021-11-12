import React from 'react';
import './App.css';
import {PagesRoutes} from "./PagesRoutes";
import {Header} from "./common/Header/Header";


export const App = () => {
    return (
        <div>
            <Header/>
            <PagesRoutes/>
        </div>
    );
}

