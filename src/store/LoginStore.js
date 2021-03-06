import {LoginApi} from "../api/LoginApi";
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
    incompleteMail:true,
    correctCode:true,
    connect:false,
    found:true,
    repeatedMail: false,
    rememberMe: false,
    isLogged() {
        return this.loggedIn;
    },
    async closeSession() {
        try {
            await LoginApi.logout(null);
        } catch (error){
            alert(error.code + ' error: ' + error.description);
        }
        this.loggedIn = false;
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
            if(Error.code === 2){ //mail repetido
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
        try {
            (await LoginApi.login({username: username, password: password}, null));
        } catch (Error) {
            if (Error.code === 4) { //password y contraseña mal
                this.correctData = false;
            }
            if(Error.code === 8){ //no estas authorized
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
            if(Error.code === 8){
                this.correctCode = false;
            }
            if(Error.code === 3){
                this.found = false;
            }
            if(Error.code === 1){
                this.correctCode=false;
                this.found=false;
            }
        }
        if(this.found && this.correctCode) {
            this.connect = true;
        }
    },

    async resendEmail(email) {
        this.incompleteMail = true;
        this.found=true;
        this.correctCode=true;
        try {
            await LoginApi.resendEmail({email: email}, null);
        }catch(Error){
            if(Error.code === 1){
                this.incompleteMail = false;
            }
        }
    },
    load() {
        let data = localStorage.getItem('item');
        this.userName = data.split("|")[0];
        this.userPassword = data.split("|")[1];
    },
    save(user, password) {
        localStorage.setItem('user', user+' '+password);
    }
}

export default LoginStore;