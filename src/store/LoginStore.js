import {LoginApi} from "../api/LoginApi";

const LoginStore = {
    loginAttempt: [{user: null,password: null}],
    userName: null,
    userPassword: "placeholder",
    loggedIn: false,

    isLogged(){
        // return LoginApi.currentUser(null).username !== "";
        return this.loggedIn;
    },
    closeSession(){
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
        LoginApi.create(user,null);
    }
    ,
    startSession() {
        LoginApi.login({username: "johndoe",password: "1234567890"},null).then(() => {
            this.loggedIn = true;
        });
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