import axios from '../axios-user-management';

export default class UserService {

    // App bar functions
    static async validateLoginToken(returningUser) {
        const request = axios.get('api/v1/auth/validate_token')
        request.then((res) => {
            return res
            // this.setState({auth: true, user: returningUser})
        })
        .catch((err) => {
            console.log(err)
        })
    }


    static async loginUserByEmail(user) {
        try {
            const res = await axios.post('api/v1/auth/sign_in', user);
            return {
                access_token: res.headers['access-token'],
                client: res.headers['client'],
                uid: res.headers['uid'],
                signedIn: true
            };
        }
        catch(e) {
            console.log(e);
        }
    }

    
    static async logoutUserByEmail(user) {
        const authHeaders = user
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
                return loggedOutUser
                // this.setState({user: loggedOutUser, auth: false})
                // localStorage.clear();
            })
            .catch((err) => {
                console.log(err);
            })
    }
}