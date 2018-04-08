import React from 'react';

import LoginModal from './Login/LoginModal';
import Logout from './Logout/Logout';
import Register from './Register/Register';

const UserManagement = (props) => {
    
    let action = null
    switch (props.action){
        case 'login':
        action = <LoginModal logMeIn={props.logMeIn} {...props}/>
            break;
        case 'register':
        action =  <Register />
            break;
        case 'logout':
        action = <Logout logMeOut={props.logMeOut} {...props}/>
            break;
        default:
            break;
    }

    return (
        <div>
            {action}
        </div>
    );
};

export default UserManagement;