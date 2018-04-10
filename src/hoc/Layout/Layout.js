import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Characters from '../../components/Campaign/Characters/Characters';
import Campaign from '../../components/Campaign/Campaign';
import UserService from '../../Services/UserManagementService';

class Layout extends Component {
    state = {
        auth: false,
        anchorEl: null,
        user: {
            uid: '',
            access_token: '',
            token: '',
            signedIn: false
        }
    }
    // App bar functions
    validateLoginToken = (returningUser) => {
        UserService.validateLoginToken();
    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const returningUser = JSON.parse(localStorage.getItem('user'))
            this.validateLoginToken(returningUser)
        }
    }

    handleChange = (event, checked) => {
        this.setState({auth: checked});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };
    // End App Bar loginClickHandler = (data) => { // Resolved as 'logMeIn' within
    // LoginForm     let newUser = {         ...data,         signedIn: true     }
    //   this.setState({user: newUser, auth: true, anchorEl: null})
    // localStorage.setItem('user', JSON.stringify(newUser)) }


    loginClickHandler = async user => {
        // console.log(user)
        const login = await UserService.loginUserByEmail(user)
        console.log(login);
    }

    logoutClickHandler = () => {
        UserService.logoutUserByEmail(this.state.user)
        .then((res) => {
            console.log('[HANDLER]', res);
            this.setState({user: res, auth: false})
            localStorage.clear();
        })
        .catch((err) => {
            console.log('[HANDLER]', err)
        })
    }

    render() {

        return (
            <div>
                <NavBar
                    {...this.state}
                    logMeIn={this.loginClickHandler}
                    logMeOut={this.logoutClickHandler}/> {/* { this.state.user.signedIn ?
                    <UserManagement action="logout" logMeOut={this.logoutClickHandler} />
                    :
                    <UserManagement action="login" logMeIn={this.loginClickHandler}/> } */}
                <Switch>
                    <Route
                        path="/characters"
                        render={routeProps => <Campaign {...routeProps} {...this.state}/>}/>
                </Switch>
            </div>
        );
    }
}

export default Layout;

