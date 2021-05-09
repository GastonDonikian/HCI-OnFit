import {bus} from "../main";
import {ExerciseApi} from "../api/ExerciseApi";

const ExerciseStore = {

    exercises: [
        {
            name: "Burpees",
            detail: "Hacer Burpees",
            repetitions: null,
            duration: 10
        },
        {
            name: "Flexiones de Brazo",
            detail: "Flexiona los brazos",
            repetitions: 10,
            duration: null
        },
        {
            name: "Sentadillas",
            detail: "Flexionar las rodillas hasta un angulo de 90 grados sin pasarse sobre los tobillos",
            repetitions: null,
            duration: 10
        },
        {
            name: "Espinales",
            detail: "Tirate al piso y hace espinales",
            repetitions: null,
            duration: 10
        },
        {
            name: "Estirar Gemelos",
            detail: "Estirar gemelos sin pasarse sobre los tobillos",
            repetitions: null,
            duration: 10
        },
        {
            name: "Estirar Espalda",
            detail: "Hacete una bolita",
            repetitions: null,
            duration: 10
        },
        {
            name: "La pose del muerto",
            detail: "Tirate al piso y disfruta hacer nada",
            repetitions: null,
            duration: 30
        },
        {
            name: "Estirar Espalda",
            detail: "Hacete una bolita",
            repetitions: null,
            duration: 10
        }],

    addExercise(name, detail, repetitions, duration) {
        if (repetitions !== null && duration !== null)
            return false;
        for (let i = 0; i < this.exercises.length; i++) {
            if (this.exercises[i].name === name)
                return false;
        }
        let ex = {
            name: name,
            detail: detail,
            type: "exercise",
            date: Number,
            metadata: {
                repetitions: repetitions,
                duration: duration,
            }
        };
        ExerciseApi.createExercise(ex, null).then(r => console.log(r));
        return true;
    },

    getAllExercises() {
        return ExerciseApi.getExercises(null);
    },

    deleteExercise(name) {
        for (let i = 0; i < this.exercises.length; i++) {
            if (this.exercises[i].name === name) {
                this.exercises.splice(i, 1);
                bus.$emit('exercisechange');
                return true;
            }
        }
        return false;
    },

}
export default ExerciseStore;


