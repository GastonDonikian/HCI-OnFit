const LoginStore = {
    loginAttempt: [{user: null,password: null}],
    exampleUser: "user",
    examplePassword: "password",
    loggedIn: true,

    isLogged(){
        return this.loggedIn;
    },
    closeSession(){
        this.loggedIn = false;
    },
    startSession() {
        //ACA HARIA UN GET DE LA API (creo) o algo para conseguir exmapleUser y examplePassword
        this.loggedIn = true;
        //this.loggedIn = (user === this.exampleUser && password === this.examplePassword);
    }

}

export default LoginStore;