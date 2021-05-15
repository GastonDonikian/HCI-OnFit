import {bus} from "../main";
import {ExerciseApi} from "../api/ExerciseApi";

const ExerciseStore = {
    overlayCreator: false,
    edit: false,
    repeatedName:false,
    name : "",
    detail: "",
    repetitions: "",
    duration: "",
    id: "",
    async addExercise(name, detail, repetitions, duration, id) {
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
            if(!this.edit) {
                await ExerciseApi.createExercise(ex, null);
            } else {
                this.edit = false;
                await ExerciseApi.modifyExercise(id, ex, null);
            }
        }catch(Error){
            if(Error.code === 2){ //nombre repetido
                this.repeatedName = true;
            }
        }
        bus.$emit('exercisechange');
        return true;
    },

    async getAllExercises() {
        return (await ExerciseApi.getExercises(null));
    },

    async getExercise(id) {
        return (await ExerciseApi.getExercise(id));
    },

    async deleteExercise(id) {
        await ExerciseApi.deleteExercise(id,null);
        bus.$emit('exercisechange');
    },

}
export default ExerciseStore;


