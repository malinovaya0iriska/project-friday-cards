import React from 'react';
import {Route, Routes} from "react-router-dom";
import Test from "./pages/Test";
import {Login} from "./pages/Login";
import {Profile} from "./pages/Profile";
import {SignUp} from "./pages/SignUp";
import {RecoverPassword} from "./pages/RecoverPassword";
import {EditPassword} from "./pages/EditPassword";
import {Error} from "./pages/Error";

export const PATH = {
    TEST: '/test',
    LOGIN: '/login',
    SIGN_UP: '/sign-up',
    PROFILE: '/profile',
    ERROR: '/404',
    PASSWORD_RECOVER: '/recover-password',
    PASSWORD_EDIT: '/edit-password',
}

export const PagesRoutes = () => {
    return (
        <Routes>
            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} element={<Test/>}/>

            <Route path={PATH.LOGIN} element={<Login/>}/>

            <Route path={PATH.TEST} element={<Test/>}/>

            <Route path={PATH.PROFILE} element={<Profile/>}/>

            <Route path={PATH.SIGN_UP} element={<SignUp/>}/>

            <Route path={PATH.PASSWORD_RECOVER} element={<RecoverPassword/>}/>

            <Route path={PATH.PASSWORD_EDIT} element={<EditPassword/>}/>

            {/*для демонстрации*/}
            <Route path={PATH.ERROR} element={<Error/>}/>

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route path={'*'} element={<Error/>}/>

        </Routes>
    );
};

