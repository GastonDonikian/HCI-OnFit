import {bus} from "../main";
import {ExerciseApi} from "../api/ExerciseApi";

const ExerciseStore = {
    overlayCreator: false,
    repeatedName:false,
    async addExercise(name, detail, repetitions, duration) {
        this.repeatedName = false;
        if (repetitions !== "" && duration !== "")
            return false;
        let ex = {
            name: name,
            detail: detail,
            type: "exercise",
            date: 0,
            metadata: {
                repetitions: null,
                duration: null,
            }
        }
        if(repetitions !== ""){
            ex.metadata.repetitions = repetitions;
        } else if(duration !== ""){
            ex.metadata.duration = duration;
        }
        try {
            await ExerciseApi.createExercise(ex, null).then((r) => console.log(r));
        }catch(Error){
            if(Error.code == 2){ //nombre repetido
                this.repeatedName = true;
            }
        }
        bus.$emit('exercisechange');
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


