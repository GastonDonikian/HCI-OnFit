import {RoutineApi} from "../api/RoutineApi";
import {CycleApi} from "../api/CycleApi";
import {bus} from "../main";


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

    async getAllByCategory() {
        return (await RoutineApi.getRoutines(null));

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
        console.log("cargando la info");
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
        console.log(tempRoutine.repeticionesPrincipal)
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

    async deleteRoutine(id) {
        await CycleApi.deleteCycles(id);
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
        console.log(name)
        for (const routine of this.routines) {
            if(routine.titulo === name) {
                let aux = JSON.parse(JSON.stringify(routine));
                this.remove(routine)
                return aux;
            }
        }
    },
    getColor(routine) {
        if (routine.category.id === 1) //Pesas
            return "#7885FF";
        if (routine.category.id === 2) //Running
            return "#F1B0B8";
        if (routine.category.id === 3) //En Casa
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
