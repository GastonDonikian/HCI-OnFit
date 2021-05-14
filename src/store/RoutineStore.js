import {RoutineApi} from "../api/RoutineApi";
import {CycleApi} from "../api/CycleApi";
import {bus} from "../main";
import CreateRoutineStore from "./CreateRoutineStore";
import {ProfileApi} from "../api/ProfileApi";


const RoutineStore = {
    currentRoutine: -1,
    routines: [{

        name: "Rutina 1",
        detail: "Rutina de entrenamiento partido",
        averageRating: 4,
        user: {
            username: "Gaston Donikian",
            gender: "male",
            avatarUrl: "https://flic.kr/p/3ntH2u",
            date: "",
            lastActivity: ""
        },
        category: {
            id: 1,
            name: "Pesas",
            detail: null
        },
        metadata: null,
    }],

    async getAllPublicRoutines() {
        return (await RoutineApi.getAllPublicRoutines(null));
    },

    async getPesasRoutines() {
        return (await RoutineApi.getPesasRotines());
    },

    async getCasaRoutines() {
        return (await RoutineApi.getCasaRotines());
    },

    async getRunningRoutines() {
        return (await RoutineApi.getRunningRotines());
    },

    async getUserRoutines(){
        return (await ProfileApi.getUserRoutines()).content;
    },

    async add(tempRoutine) {
        let routine = {
            name: tempRoutine.titulo,
            detail: tempRoutine.detail,
            isPublic: tempRoutine.isPublic,
            difficulty: "rookie",
            category: {
                id: 2,
            },
            metadata: null
        }
        let currentRoutine = await RoutineApi.createRoutine(routine, null);
        await this.addInfo(currentRoutine, tempRoutine);
        bus.$emit('routinechange');
    },

    async addInfo(routine, tempRoutine){
        let entrada = {
            name: "entrada en calor",
            detail: "",
            type: "warmup",
            order: 1,
            repetitions: tempRoutine.repeticionesEntradaEnCalor,
            metadata: null,
        }
        await RoutineApi.createCycle(routine.id, entrada, null).then((r) => CycleApi.addEx(r.id, tempRoutine.entradaEnCalor, null));
        let principal = {
            name: "principal",
            detail: "",
            type: "exercise",
            order: 2,
            repetitions: tempRoutine.repeticionesPrincipal,
            metadata: null,
        }
        await RoutineApi.createCycle(routine.id, principal, null).then(r => CycleApi.addEx(r.id, tempRoutine.principal, null));
        let elongacion = {
            name: "elongación",
            detail: "",
            type: "cooldown",
            order: 3,
            repetitions: tempRoutine.repeticionesElongacion,
            metadata: null,
        }
        await RoutineApi.createCycle(routine.id, elongacion, null).then(r => CycleApi.addEx(r.id, tempRoutine.elongacion, null));
    },

    async edit(tempRoutine) {
        let editRoutine = CreateRoutineStore.rutineAEditar;
        await RoutineApi.retriveCycles(editRoutine.id, true).then(() => this.addInfo(editRoutine, tempRoutine));
        let routine = {
            name: tempRoutine.titulo,
            detail: tempRoutine.detail,
            isPublic: tempRoutine.isPublic,
            difficulty: "rookie",
            category: {
                id: 2,
            },
            metadata: null
        }
        await RoutineApi.editRoutine(editRoutine.id, routine);
        bus.$emit('routinechange');
    },

    async deleteRoutine(id) {
        await RoutineApi.retriveCycles(id, true);
        await RoutineApi.deleteRoutine(id, null);
        bus.$emit('routinechange');
    },

    findIx(name){
        for (let i = 0; i < this.routines.length; i++) {
            if(this.routines[i].titulo === name) {
                this.currentRoutine = i;
            }
        }
    },
    get(index) {
        if (index > this.routines.length || index < 0)
            return null;

        return this.routines[index];
    },

    findByName(name) {

        for (const routine of this.routines) {
            if(routine.titulo === name) {
                let aux = JSON.parse(JSON.stringify(routine));
                this.remove(routine)
                return aux;
            }
        }
    },
    getColor(routine) {
        if (routine.category.id === 2) //Pesas
            return "#7885FF";
        if (routine.category.id === 3) //Running
            return "#F1B0B8";
        if (routine.category.id === 1) //En Casa
            return "#B495C2";
    },
    // getAllByCategory(category) {
    //     if (category === 'En Casa')
    //         return this.routines.filter(routine => routine.disciplina === RutinasEnum.EnCasa);
    //     if (category === 'Running')
    //         return this.routines.filter(routine => routine.disciplina === RutinasEnum.Running);
    //     if (category === 'Pesas')
    //         return this.routines.filter(routine => routine.disciplina === RutinasEnum.Pesas);
    //     if (category === 'Destacados') //ESTA OBVIO QUE VA A CAMBIAR CON LA API
    //         return this.routines.filter(routine => routine.disciplina === RutinasEnum.Destacados);
    //     return this.routines;
    // }
}

export default RoutineStore;
