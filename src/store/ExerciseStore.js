const ExerciseStore = {
    exercises: [
        {
            titulo: "Burpees",
            description: "Hacer Burpees",
            repetitions: null,
            duration: 10
        },
        {
            titulo: "Flexiones de Brazo",
            description: "Flexiona los brazos",
            repetitions: 10,
            duration: null
        },
        {
            titulo: "Sentadillas",
            description: "Flexionar las rodillas hasta un angulo de 90 grados sin pasarse sobre los tobillos",
            repetitions: null,
            duration: 10
        },
        {
            titulo: "Espinales",
            description: "Tirate al piso y hace espinales",
            repetitions: null,
            duration: 10
        },
        {
            titulo: "Estirar Gemelos",
            description: "Estirar gemelos sin pasarse sobre los tobillos",
            repetitions: null,
            duration: 10
        },
        {
            titulo: "Estirar Espalda",
            description: "Hacete una bolita",
            repetitions: null,
            duration: 10
        },
        {
            titulo: "La pose del muerto",
            description: "Tirate al piso y disfruta hacer nada",
            repetitions: null,
            duration: 30
        }],
    addExercise(titulo, description, repetitions,duration){
        if(repetitions !== null  && duration !== null )
            return false;
        for(let i = 0; i < this.exercises.length; i++) {
            if(this.exercises[i].titulo === titulo)
                return false;
        }
        this.exercises.push({titulo,description,repetitions,duration});
        return true;
    },

    getAllExercises(){
        return this.exercises;
    },

    deleteExercise(titulo) {
        for(let i = 0; i < this.exercises.length; i++) {
            if(this.exercises[i].titulo === titulo) {
                this.exercises.splice(i, 1);
                return true;
            }
        }
        return false;
    },



}
export default ExerciseStore;