const LoginStore = {
    loginAttempt: [{user: null,password: null}],
    userName: null,
    userPassword: "placeholder",
    loggedIn: false,

    isLogged(){
        return this.loggedIn;
    },
    closeSession(){
        this.loggedIn = false;
    },
    setUserName(userName) {
        this.userName = userName;
    },
    setUserPassword(userPassword) {
        this.userPassword = userPassword;
    },
    startSession() {
        //ACA HARIA UN GET DE LA API (creo) o algo para conseguir exmapleUser y examplePassword
        this.loggedIn = true;
        //this.loggedIn = (user === this.exampleUser && password === this.examplePassword);
    },
    load() {
        let data = localStorage.getItem('item');
        this.userName = data.split("|")[0];
        this.userPassword = data.split("|")[1];
    },
    save() {
        localStorage.setItem('item', this.userName + "|" + this.userPassword);
    },


    created() {

    },
    updated() {
        this.loginStore
    }


}

export default LoginStore;