import {LoginApi} from "../api/LoginApi";
import {CategoryApi} from "../api/CategoryApi";
import ProfileStore from "./ProfileStore";

const LoginStore = {
    loginAttempt: [{user: "", password: ""}],
    user: "",
    loggedIn: false,
    profileStore: ProfileStore,
    authorized:true,
    correctData:true,
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
        this.correctData = true;
        this.authorized = true;
        try {
            (await LoginApi.login({username: username, password: password}, null));
        } catch (Unauthorized) {
            if (Unauthorized.code == 4) {
                this.correctData = false;
            }
            if(Unauthorized.code == 8){
                this.authorized=false;
            }
        }
        if(this.correctData && this.authorized){
        await this.profileStore.readUserInfo();
        this.loggedIn = true;
        }
    },
    async validateEmail(email, code) {
        return (await LoginApi.validateEmail({email: email, code: code}, null).then(() => {
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
            this.authorized=true;
            return true;
        }).catch(() => {
            this.authorized=false;
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