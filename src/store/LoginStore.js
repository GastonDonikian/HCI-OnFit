import {LoginApi} from "../api/LoginApi";

const LoginStore = {
    loginAttempt: [{user: "", password: ""}],
    user: "",
    loggedIn: false,

    isLogged() {
        // return LoginApi.currentUser(null).username !== "";
        return this.loggedIn;
    },
    async closeSession() {
        try {
            await LoginApi.logout(null);
        } catch (error){
            alert(error.code + ' error: ' + error.description);
        }
        this.loggedIn = false;
        localStorage.clear();
    },
    setUserName(userName) {
        this.userName = userName;
    },
    setUserPassword(userPassword) {
        this.userPassword = userPassword;
    },
    async register(user) {
        await LoginApi.create(user, null);
    }
    ,
    async startSession(username, password) {
        (await LoginApi.login({username: username, password: password}, null));
        this.loggedIn = true;
    },
    async validateEmail(email, code) {
        return (await LoginApi.validateEmail({email: email, code: code}, null).then(() => {
            return true;
        }).catch(() => {
            return false;
        }));
    },
    async resendEmail(email) {
        await LoginApi.resendEmail({email: email}, null);
    },

    isCurrentUserVerified() {
        return LoginApi.currentUser(null).verified;
    },

    isUserLogged() {
        return LoginApi.isUserLogged();
    },


    load() {
        let data = localStorage.getItem('item');
        this.userName = data.split("|")[0];
        this.userPassword = data.split("|")[1];
    },
    save() {
        localStorage.setItem('item', this.userName + "|" + this.userPassword);
    }
}

export default LoginStore;