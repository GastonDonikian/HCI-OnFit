import {Api} from "./Api";

export {RoutineApi};

class RoutineApi {
    static get url() {
        return `${Api.baseUrl}/routines`;
    }

    static async getRoutines(controller) {
        return (await Api.get(`${RoutineApi.url}`, true, controller)).content;
    }

    //HACER QUERIES PARA FILTRAR LAS RUTINAS ES UNA REVERENDA PELOTUDEZ, AVISENME SI NECESITAN AYUDA


}