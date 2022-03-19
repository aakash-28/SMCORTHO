import React from 'react';
import SignIn from './Sign-in';
import { Account } from '../../account/Account';

const LoginPage = () => {
    return(
        <Account>
            <SignIn/>
        </Account>
    )
}

export default LoginPage;