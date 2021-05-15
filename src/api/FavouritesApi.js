import {Api} from "./Api";

export {FavouritesApi};

class FavouritesApi {
    static get url() {
        return `${Api.baseUrl}/favourites`;
    }

    static async getRoutinesFav(){
        return (await Api.get(`${FavouritesApi.url}`, true)).content;
    }

    static async addFav(id){
        return await Api.post(`${FavouritesApi.url}/${id}/`, true);
    }

    static async removeFav(id){
        return await Api.delete(`${FavouritesApi.url}/${id}/`, true);
    }
}
