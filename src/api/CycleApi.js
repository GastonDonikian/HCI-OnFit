import {Api} from "./Api";
import {RoutineApi} from "./RoutineApi";

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
            try {
                await (Api.post(`${CycleApi.url}/${id}/exercises/${exercises[i].id}`, true, exCycle, controller))
            } catch (e) {
                console.log("ya esta el ejercicio")
            }
        }
    }

    static async deleteCycles(id, content){
        for (const cycle of content) {
            (await Api.delete(`${RoutineApi.url}/${id}/cycles/${cycle.id}`,true));
        }
    }

    static async retrieveCycle(id){
        return (await Api.get(`${CycleApi.url}/${id}/exercises`))
    }

}