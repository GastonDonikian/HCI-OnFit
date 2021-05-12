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
            console.log(CycleApi.url);
            console.log(exercises.id);
            console.log(id)
            await (Api.post(`${CycleApi.url}/${id}/exercises/${exercises[i].id}`, true, exCycle, controller))
        }
    }

    static async deleteCycles(id){
        for (const cycle of await RoutineApi.retriveCycles(id).content) {
            console.log("elimino rutina");
            return  (await Api.delete(`${RoutineApi.url}/${id}/cycles/${cycle.id}`,true));
        }
    }

    // static async retirveCycle(RoutineId, CycleId){
    //     await (Api.get(`${CycleApi.url}/${}/exercises/${exercises[i].id}`))
    // }
}