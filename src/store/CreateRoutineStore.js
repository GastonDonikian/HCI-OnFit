import RoutineStore from "./RoutineStore";
import RutinasEnum from "./RutinasEnum";

const CreateRoutineStore = {
    popup: false,
    edit: false,
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
        this.edit = false;
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
    },

    cargarRutina(routine){
        this.edit = true;
        this.tempRoutine = routine;
    },

    remove(name, category)  {
        if (category === "entradaEnCalor")
            this.removeCalor(name);
        else if (category === "principal")
            this.removePrincipal(name)
        else
            this.removeElongacion(name);
    },
    //hay algo mal aca y no se que es
    removeCalor(name){
        let index = this.tempRoutine.entradaEnCalor.findIndex(i => (i === name));
        if (index === -1)
            return false;

        this.tempRoutine.entradaEnCalor.splice(index, 1);
    },
    removePrincipal(name){
        let index = this.tempRoutine.principal.findIndex(i => (i === name));
        if (index === -1)
            return false;

        this.tempRoutine.principal.splice(index, 1);
    },
    removeElongacion(name){
        let index = this.tempRoutine.elongacion.findIndex(i => (i === name));
        if (index === -1)
            return false;

        this.tempRoutine.elongacion.splice(index, 1);
    }

}

export default CreateRoutineStore;