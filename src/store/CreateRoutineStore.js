import RoutineStore from "./RoutineStore";
import RutinasEnum from "./RutinasEnum";

const CreateRoutineStore = {
    popup: false,
    currentSeccion: "",
    tempRoutine: {
        titulo: "",
        description: "",
        estrellas: null,
        disciplina: null,
        repeticionesEntradaEnCalor: null,
        repeticionesPrincipal: null,
        repeticionesElongacion: null,
        entradaEnCalor: [],
        principal: [],
        elongacion: []
    },

    setName(titulo) {
        this.tempRoutine.titulo = titulo;
    },

    setDescription(description) {
        this.tempRoutine.description = description;
    },

    setDisciplina(disciplina) {
        if (disciplina === "Pesas")
            this.tempRoutine.disciplina = RutinasEnum.Pesas;
        else if (disciplina === "Running")
            this.tempRoutine.disciplina = RutinasEnum.Running;
        else
            this.tempRoutine.disciplina = RutinasEnum.EnCasa;
    },

    addRoutine() {
        let aux = this.tempRoutine
        RoutineStore.add(aux);
    },

    addExercise(exercise) {
        if (this.currentSeccion === "entradaEnCalor")
            this.tempRoutine.entradaEnCalor.push(exercise);
        else if (this.currentSeccion === "principal")
            this.tempRoutine.principal.push(exercise);
        else
            this.tempRoutine.elongacion.push(exercise);
    },

    vaciarTemp(){
        this.popup = false;
        this.tempRoutine.elongacion = []
        this.tempRoutine.principal = []
        this.tempRoutine.entradaEnCalor = []
    },
    activate(seccion) {
        this.currentSeccion = seccion;
        this.popup = true;
    },

    deactivate() {
        this.popup = false;
    }
}

export default CreateRoutineStore;