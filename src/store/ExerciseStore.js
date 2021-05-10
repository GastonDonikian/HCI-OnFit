import {bus} from "../main";
import {ExerciseApi} from "../api/ExerciseApi";

const ExerciseStore = {
    async addExercise(name, detail, repetitions, duration) {
        //TODO: PREGUNTAR SI EL API YA VALIDA Y ES NECESARIO ESTO
        let exercises = (await this.getAllExercises());
        if (repetitions !== null && duration !== null)
            return false;
        for (let i = 0; i < exercises.length; i++) {
            if (exercises[i].name === name)
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
        await ExerciseApi.createExercise(ex, null).then(r => console.log(r));
        return true;
    },

    async getAllExercises() {
        return (await ExerciseApi.getExercises(null));
    },

    async deleteExercise(id) {
        await ExerciseApi.deleteExercise(id,null);
        bus.$emit('exercisechange');
    },

}
export default ExerciseStore;


