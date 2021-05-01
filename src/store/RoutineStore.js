const RoutineStore = {
    routines: [{
        titulo: "Rutina 1",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 2",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 3",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 4",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 5",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 6",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 7",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 8",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 9",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 10",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 11",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
    }, {
        titulo: "Rutina 12",
        description: "Rutina de entrenamiento partido",
        estrellas: 4,
        color: "#F1B0B8"
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
    getAll() {
        return this.routines;
    }
}

export default RoutineStore;
