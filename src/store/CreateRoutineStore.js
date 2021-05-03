// eslint-disable-next-line no-unused-vars

const CreateRoutineStore = {
    popup: false,

    activate(){
        this.popup = true;
    },

    deactivate(){
        this.popup = false;
    }
}

export default CreateRoutineStore;