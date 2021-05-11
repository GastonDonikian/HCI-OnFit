import {Api} from "./Api";

export {RoutineApi};

class RoutineApi {
    static get url() {
        return `${Api.baseUrl}/routines`;
    }

    static async getRoutines(controller) {
        return (await Api.get(`${RoutineApi.url}`, true, controller)).content;
    }

    static async createRoutine(routine, controller){
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
        return await (Api.post(`${RoutineApi.url}`, true,routine, controller))
    }

    static async deleteRoutine(id,controller){
        return  (await Api.delete(`${RoutineApi.url}/${id}`,true,controller));
    }

    static async createCycle(id, cycle, controller){
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

    //HACER QUERIES PARA FILTRAR LAS RUTINAS ES UNA REVERENDA PELOTUDEZ, AVISENME SI NECESITAN AYUDA


}