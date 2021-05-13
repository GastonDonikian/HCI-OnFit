import {LoginApi} from "../api/LoginApi";
import {CategoryApi} from "../api/CategoryApi";
import ProfileStore from "./ProfileStore";

const LoginStore = {
    loginAttempt: [{user: "", password: ""}],
    user: "",
    username: "",
    password: "",
    loggedIn: false,
    profileStore: ProfileStore,
    authorized:true,
    correctData:true,
    correctCode:true,
    connect:false,
    found:true,
    repeatedMail: false,
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
        try {
            await LoginApi.create(user, null);
        }catch(Error){
            if(Error.code == 2){ //mail repetido
                this.repeatedMail = true;
            }
        }
    }
    ,
    async startSession(username, password) {
        this.correctData = true;
        this.authorized = true;
        this.username = username;
        this.password = password;
        console.log("store" + this.username);
        console.log("local " + username);
        try {
            (await LoginApi.login({username: username, password: password}, null));
        } catch (Error) {
            if (Error.code == 4) { //password y contrasenia mal
                this.correctData = false;
            }
            if(Error.code == 8){ //no estas authorized
                this.authorized=false;
            }
        }
        if(this.correctData && this.authorized){
            await this.profileStore.readUserInfo();
            this.loggedIn = true;
        }
    },
    async validateEmail(email, code) {
        this.correctCode = true;
        this.found = true;
        try{
            await LoginApi.validateEmail({email: email, code: code}, null)
        }catch(Error){
            if(Error.code == 8){ //codigo incorrecto
                this.correctCode = false;
                console.log("codigo incorrecto");
            }
            if(Error.code == 3){ //no esta el mail
                console.log("no esta el mail");
                this.found = false;
            }
        }
        if(this.found && this.correctCode) {
            this.connect = true;
        //     let enCasa = {
        //         name: "En Casa",
        //         detail: "en casa",
        //     }
        //     CategoryApi.addCategory(enCasa, null);
        //     let pesas = {
        //         name: "Pesas",
        //         detail: "pesas",
        //     }
        //     CategoryApi.addCategory(pesas, null);
        //     let runninng = {
        //         name: "Running",
        //         detail: "running",
        //     }
        //     CategoryApi.addCategory(runninng, null);
        }
    },
    createCategories() {
        if(this.found && this.correctCode) {
            let enCasa = {
                name: "En Casa",
                detail: "en casa",
            }
            CategoryApi.addCategory(enCasa, null);
            let pesas = {
                name: "Pesas",
                detail: "pesas",
            }
            CategoryApi.addCategory(pesas, null);
            let runninng = {
                name: "Running",
                detail: "running",
            }
            CategoryApi.addCategory(runninng, null);
            this.connect = true;
        }
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