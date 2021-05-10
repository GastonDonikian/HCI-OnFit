import {Api} from "./Api";

export {CycleApi};

class CycleApi {
    static get url() {
        return `${Api.baseUrl}/cycles`;
    }

    static async addEx(id, exercises, controller){
        for (const exercise of exercises) {
            let exCycle = {
                order: "1",
                duration: exercise.metadata.duration,
                repetitions: exercise.metadata.repetitions,
            }
            await (Api.post(`${CycleApi.url}/${id}/exercise/${exercise.id}`, true, exCycle, controller))
        }

    }
}