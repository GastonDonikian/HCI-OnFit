import RutinasEnum from "./RutinasEnum";

const RoutineStore = {
    routines: [{
        titulo: "Rutina 1",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.Pesas
    }, {
        titulo: "Rutina 2",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.EnCasa
    }, {
        titulo: "Rutina 3",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.EnCasa
    }, {
        titulo: "Rutina 4",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.Running
    }, {
        titulo: "Rutina 5",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.Pesas
    }, {
        titulo: "Rutina 6",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.Running
    }, {
        titulo: "Rutina 7",
        description: "Rutina de entrenamiento partido",
        estrellas: 2,
        disciplina: RutinasEnum.EnCasa
    }, {
        titulo: "Rutina 8",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.EnCasa
    }, {
        titulo: "Rutina 9",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.Pesas
    }, {
        titulo: "Rutina 10",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.Running
    }, {
        titulo: "Rutina 11",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.Running
    }, {
        titulo: "Rutina 12",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        disciplina: RutinasEnum.EnCasa
    }],
    add(routine) {
        this.routines.push(routine);
    },
    remove(routine) {
        let index = this.routines.findIndex(i => (i === routine));
        if (index === -1)
            return false;

        this.routines.splice(index, 1);
    },
    get(index) {
        if (index > this.routines.length || index < 0)
            return null;

        return this.routines[index];
    },
    getAllByCategory(category) {
        if (category === 'En Casa')
            return this.routines.filter(routine => routine.disciplina === RutinasEnum.EnCasa);
        if (category === 'Running')
            return this.routines.filter(routine => routine.disciplina === RutinasEnum.Running);
        if (category === 'Pesas')
            return this.routines.filter(routine => routine.disciplina === RutinasEnum.Pesas);
        if (category === 'Destacados') //ESTA OBVIO QUE VA A CAMBIAR CON LA API
            return this.routines.filter(routine => routine.disciplina === RutinasEnum.Destacados);
        return this.routines;
    }
}

export default RoutineStore;
