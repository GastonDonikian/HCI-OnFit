import RoutineStore from "./RoutineStore";
import RutinasEnum from "./RutinasEnum";

const CreateRoutineStore = {
    popup: false,
    currentSeccion: "",
    edit: false,
    tempRoutine: {
        titulo: "",
        detail: "",
        estrellas: null,
        disciplina: null,
        repeticionesEntradaEnCalor: 1,
        repeticionesPrincipal: 1,
        repeticionesElongacion: 1,
        isPublic: false,
        category: 2,
        entradaEnCalor: [],
        principal: [],
        elongacion: []
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
        console.log(this.tempRoutine.titulo);
        RoutineStore.add(this.tempRoutine);
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
        this.tempRoutine.titulo = "";
        this.tempRoutine.detail= "";
        this.tempRoutine.estrellas= null;
        this.tempRoutine.disciplina= null;
        this.tempRoutine.repeticionesEntradaEnCalor= 1;
        this.tempRoutine.repeticionesPrincipal= 1;
        this.tempRoutine.repeticionesElongacion= 1;
        this.tempRoutine.isPublic= false;
        this.tempRoutine.category= 0;
        this.tempRoutine.entradaEnCalor= [];
        this.tempRoutine.principal= [];
        this.tempRoutine.elongacion= [];
    },

    cargarTemp(routine){
        this.tempRoutine.titulo = routine.name;
        this.tempRoutine.detail= routine.detail;
        this.tempRoutine.estrellas= null;
        this.tempRoutine.disciplina= null;

        this.tempRoutine.repeticionesEntradaEnCalor= 1;
        this.tempRoutine.repeticionesPrincipal= 1;
        this.tempRoutine.repeticionesElongacion= 1;
        this.tempRoutine.isPublic= routine.isPublic;
        this.tempRoutine.category= routine.category.id;
        this.tempRoutine.entradaEnCalor= [];
        this.tempRoutine.principal= [];
        this.tempRoutine.elongacion= [];
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