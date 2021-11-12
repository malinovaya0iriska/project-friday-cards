import React from 'react';
import {PATH} from "../../PagesRoutes";
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

export const Header = () => {
    return (
        <nav className={s.nav}>

            <NavLink to={PATH.LOGIN}>Login</NavLink>

            <NavLink to={PATH.TEST}>Test</NavLink>

            <NavLink to={PATH.SIGN_UP}>Sign UP</NavLink>

            <NavLink to={PATH.PROFILE}>Profile</NavLink>

            <NavLink to={PATH.PASSWORD_EDIT}>Edit password</NavLink>

            <NavLink to={PATH.PASSWORD_RECOVER}>Recover password</NavLink>

            <NavLink to={PATH.ERROR}>Error-page</NavLink>
        </nav>
    );
};

