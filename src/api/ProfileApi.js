import {Api} from "./Api";

export {ProfileApi};
// export default ProfileApi;

class ProfileApi {
    static get url() {
        return `${Api.baseUrl}/users`;
    }

    static async getCurrentUser() {
        return await Api.get(`${ProfileApi.url}/current`, true);
    }

    static async deleteAccount() {
        return await (Api.delete(`${ProfileApi.url}/current`, true, null));
    }

    static async logOut() {
        return await Api.post(`${ProfileApi.url}/logout`, true, null, null);
    }

    static async getAllRoutines(){
        return (await Api.get(`${ProfileApi.url}/current/routines`));
    }
}
