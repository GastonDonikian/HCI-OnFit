import {LoginApi} from "../api/LoginApi";

const LoginStore = {
    loginAttempt: [{user: "", password: ""}],
    user:"",
    loggedIn: false,

    isLogged() {
        // return LoginApi.currentUser(null).username !== "";
        return this.loggedIn;
    },
    closeSession() {
        this.loggedIn = false;
        localStorage.clear();
    },
    setUserName(userName) {
        this.userName = userName;
    },
    setUserPassword(userPassword) {
        this.userPassword = userPassword;
    },
    register(user) {
        LoginApi.create(user, null);
    }
    ,
    startSession() {
        LoginApi.login({username: "johndoe", password: "1234567890"}, null).then(() => {
            this.loggedIn = true;
        });
    },
    validateEmail(email, code) {
        return (LoginApi.validateEmail({email: email, code: code}, null).then(() => {
            return true;
        }).catch(() => {
            return false;
        }));

    },
    resendEmail(email) {
      LoginApi.resendEmail({email : email},null);
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