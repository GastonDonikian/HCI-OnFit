import {Api} from "./Api";


export {LoginApi};

class LoginApi {
    static get url() {
        return `${Api.baseUrl}/users`;
    }

    static async login(user, controller) {
        const result = Api.post(`${LoginApi.url}/login`, false, user, controller,);
        sessionStorage.setItem('token', result.token);
        Api.token = result.token;
    }

    static async logout(user, controller) {
        await Api.post(`${LoginApi.url}/logout`, true, user, controller);
        sessionStorage.removeItem('token');
        Api.token = undefined;
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


}