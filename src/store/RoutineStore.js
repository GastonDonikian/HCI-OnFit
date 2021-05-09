import {RoutineApi} from "../api/RoutineApi";


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
    add(routine) {
        let array = JSON.parse(JSON.stringify(this.routines));
        array.push(routine);
        this.routines = JSON.parse(JSON.stringify(array));
        console.log(this.routines);
    },
    remove(routine) {
        let index = this.routines.findIndex(i => (i === routine));
        if (index === -1)
            return false;

        this.routines.splice(index, 1);
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
