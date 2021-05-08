import {Api} from "./Api";


export {LoginApi};

class LoginApi {
    loggedIn = false;

    static get url() {
        return `${Api.baseUrl}/users`;
    }

    static async login(user, controller) {
        const result = await Api.post(`${LoginApi.url}/login`, false, user, controller,);
        sessionStorage.setItem('token', result.token);
        Api.token = result.token;
        this.loggedIn = true;
    }

    static async logout(controller) {
        await Api.post(`${LoginApi.url}/logout`, true, {}, controller);
        sessionStorage.removeItem('token');
        Api.token = undefined;
        this.loggedIn = false;
    }

    static async validateEmail(validate, controller) {
        return await Api.post(`${LoginApi.url}/verify_email`, false, validate, controller);
    }

    static async resendEmail(email, controller) {
        return await Api.post(`${LoginApi.url}/resend_verification`, false, email, controller);
    }

    static async create(user, controller) {
        return await Api.post(`${LoginApi.url}`, true, user, controller);
    }

    static async update(user, controller) {
        return await Api.put(`${LoginApi.url}/current`, true, user, controller);
    }

    static async delete(controller) {
        return await Api.delete(`${LoginApi.url}/current`, true, controller);
    }

    static async currentUser(controller) {
        return await Api.get(`${LoginApi.url}/current`, true, controller);
    }

    static async isUserLogged() {
        return this.loggedIn;
    }


}
