import {Api} from "./Api";

export {CategoryApi};

class CategoryApi {
    static get url() {
        return `${Api.baseUrl}/categories`;
    }

    static async addCategory(category, controller){
        await (Api.post(`${CategoryApi.url}`, true, category, controller))
    }
}