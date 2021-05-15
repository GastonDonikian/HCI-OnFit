import {Api} from "./Api";

export {ExerciseApi};

class ExerciseApi {
    static get url() {
        return `${Api.baseUrl}/exercises`;
    }

    static async getExercises(controller) {
        return (await Api.get(`${ExerciseApi.url}?page=0&size=1000&orderBy=id&direction=asc`, true, controller)).content;
    }

    static async createExercise(exercise, controller) {
        return await (Api.post(`${ExerciseApi.url}`, true,exercise, controller));
    }

    static async getExercise(id){
        return await (Api.get(`${ExerciseApi.url}/${id}`, true, null));
    }

    static async modifyExercise(id, exercise,controller){
        return await (Api.put(`${ExerciseApi.url}/${id}`, true,exercise, controller));
    }

    static async deleteExercise(id,controller){
        return await Api.delete(`${ExerciseApi.url}/${id}`,true,controller);
    }
}
