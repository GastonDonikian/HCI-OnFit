import {Api} from "./Api";

export {ReviewsApi};

class ReviewsApi {
    static get url() {
        return `${Api.baseUrl}/reviews`;
    }

    static async addReview(id, score){
        let review = {
            score: score,
            review:""
        }
        return (await Api.post(`${ReviewsApi.url}/${id}`, true, review,  null));
    }
}