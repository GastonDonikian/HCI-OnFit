import {Api} from "./Api";

export {CycleApi};

class CycleApi {
    static get url() {
        return `${Api.baseUrl}/cycles`;
    }

    static async addEx(id, exercises, controller){
        for (let i = 0; i < exercises.length; i++) {
            let dur = parseInt(exercises[i].metadata.duration, 10) || 0;
            let rep = parseInt(exercises[i].metadata.repetitions, 10) || 0;
            let exCycle = {
                order: i + 1,
                duration: dur,
                repetitions: rep,
            }
            await (Api.post(`${CycleApi.url}/${id}/exercises/${exercises[i].id}`, true, exCycle, controller))
        }

    }
}