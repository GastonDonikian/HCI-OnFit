import {Api} from "./Api";
import {CycleApi} from "./CycleApi";

export {RoutineApi};

class RoutineApi {
    static get url() {
        return `${Api.baseUrl}/routines`;
    }

    static async getAllPublicRoutines(controller) {
        return (await Api.get(`${RoutineApi.url}?page=0&size=1000&orderBy=id&direction=asc`, true, controller)).content;
    }

    static async getAllPublicRoutinesCount() {
        let aux = await (await this.getAllPublicRoutines(null)).length;
        console.log(aux);
        return (await aux);
    }

    static async getPesasRotines() {
        return (await Api.get(`${RoutineApi.url}?categoryId=2`, true, null)).content;
    }

    static async getRunningRotines() {
        return (await Api.get(`${RoutineApi.url}?categoryId=3`, true, null)).content;
    }

    static async getCasaRotines() {
        return (await Api.get(`${RoutineApi.url}?categoryId=1`, true, null)).content;
    }

    static async createRoutine(routine, controller) {
        /*TIENE QUE SER DE LA
        * FORMA
        * {
        *   name: "",
        *   detail: "",
        *   isPublic: "",
        *   difficulty: "",
        *   category: {
        *       id:
        *   }
        *   metadata: null
        * }*/
        return await (Api.post(`${RoutineApi.url}`, true, routine, controller))
    }

    static async deleteRoutine(id, controller) {
        return (await Api.delete(`${RoutineApi.url}/${id}`, true, controller));
    }

    static async createCycle(id, cycle, controller) {
        /*TIENE QUE SER DE LA
        * FORMA
        * {
        *   name: "",
        *   detail: "",
        *   type: "",
        *   order: "",
        *   repetitions: "",
        *   metadata: null
        * }*/
        return (await Api.post(`${RoutineApi.url}/${id}/cycles`, true, cycle, controller));
    }

    static async retriveCycles(id, deleteR) {
        if (deleteR) {
            await Api.get(`${RoutineApi.url}/${id}/cycles`, true, null).then((r) => CycleApi.deleteCycles(id, r.content));
        } else {
            return (await Api.get(`${RoutineApi.url}/${id}/cycles`, true, null));
        }
    }

    static async editRoutine(id, routine) {
        await Api.put(`${RoutineApi.url}/${id}`, true, routine)
    }

    //HACER QUERIES PARA FILTRAR LAS RUTINAS ES UNA REVERENDA PELOTUDEZ, AVISENME SI NECESITAN AYUDA


}