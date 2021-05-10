import {Api} from "./Api";

export {ProfileApi};
// export default ProfileApi;

class ProfileApi {
    static get url() {
        return `${Api.baseUrl}/users`;
    }

    static async getCurrentUser() {
        return await Api.get(`${ProfileApi.url}/current`, true, null);
    }

    static async changePassword() {
        //TODO como hacer para cambiar la contraseña? no existe metodo desde la api. Lo sacamos?
    }

    static async deleteAccount() {
        return await (Api.delete(`${ProfileApi.url}/current`, true, null));
    }

    static async logOut() {
        return await Api.post(`${ProfileApi.url}/logout`, true, null, null);
    }
}
