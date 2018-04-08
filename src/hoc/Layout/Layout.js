import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';
import axios from '../../axios-user-management';

import NavBar from './NavBar/NavBar';
import Characters from '../../components/Campaign/Characters/Characters';


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

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const returningUser = JSON.parse(localStorage.getItem('user'))
            this.setState({auth: true, user: returningUser})
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

    loginClickHandler = (user) => {
        let userObj = {
            email: user.email,
            password: user.password
        }
        const request = axios.post('api/v1/auth/sign_in', userObj);

        request.then((res) => {
            let loggedInUser = {
                'access_token': res.headers['access-token'],
                'client': res.headers['client'],
                'uid': res.headers['uid'],
                'signedIn': true
            };
            this.setState({user: loggedInUser, auth: true, anchorEl: null})
            localStorage.setItem('user', JSON.stringify(loggedInUser));
        }).catch((err) => {
            console.log(err);
            // setErrors({ test: 'This was an error' })
        })
        return request;
    };

    logoutClickHandler = (data) => { // Resolved as 'logMeOut' within Logout
        let oldUser = {
            ...data,
            signedIn: false
        }
        this.setState({user: oldUser, auth: false})
        localStorage.clear();
    }

    logoutClickHandler = () => {
        const authHeaders = this.state.user
        // console.log(authHeaders);
        axios
            .delete('/api/v1/auth/sign_out', {headers: authHeaders})
            .then((res) => {
                console.log('Logged out');
                const loggedOutUser = {
                    uid: null,
                    client: null,
                    access_token: null,
                    signedIn: false
                }
                this.setState({user: loggedOutUser, auth: false})
                localStorage.clear();
            })
            .catch((err) => {
                console.log(err);
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
                        render={routeProps => <Characters {...routeProps} {...this.state}/>}/>
                </Switch>
            </div>
        );
    }
}

export default Layout;