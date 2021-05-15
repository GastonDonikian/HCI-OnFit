import RoutineStore from "./RoutineStore";
import RutinasEnum from "./RutinasEnum";
import {RoutineApi} from "../api/RoutineApi";
import {CycleApi} from "../api/CycleApi";

const CreateRoutineStore = {
    popup: false,
    currentSeccion: "",
    edit: false,
    rutineAEditar: {type: Object},
    tempRoutine: {
        titulo: "",
        detail: "",
        estrellas: null,
        disciplina: "",
        repeticionesEntradaEnCalor: 1,
        repeticionesPrincipal: 1,
        repeticionesElongacion: 1,
        isPublic: false,
        category: {
            id: null,
            name: "",
            detail: null
        },
        entradaEnCalor: [],
        principal: [],
        elongacion: []
    },
    setDisciplina(disciplina) {
        if (disciplina === "Pesas") {
            this.tempRoutine.category.id=2;
            this.tempRoutine.disciplina = RutinasEnum.Pesas;
        }
        else if (disciplina === "Running") {
            this.tempRoutine.category.id = 3;
            this.tempRoutine.disciplina = RutinasEnum.Running;

        }
        else{
            this.tempRoutine.category.id=1;
            this.tempRoutine.disciplina = RutinasEnum.EnCasa;
        }
    },

    addRoutine() {
        this.setDisciplina(this.tempRoutine.disciplina);
        RoutineStore.add(this.tempRoutine);
    },

    editRoutine() {
        RoutineStore.edit(this.tempRoutine);
    },

    //TODO: agrtegar para que muestre el error
    addExercise(exercise) {
        if (this.currentSeccion === "entradaEnCalor") {
            for (const ex of this.tempRoutine.entradaEnCalor) {
                if(ex.id === exercise.id){
                    return;
                }
            }
            this.tempRoutine.entradaEnCalor.push(exercise);
        }
        else if (this.currentSeccion === "principal") {
            for (const ex of this.tempRoutine.principal) {
                if(ex.id === exercise.id){
                    return;
                }
            }
            this.tempRoutine.principal.push(exercise);
        }
        else {
            for (const ex of this.tempRoutine.elongacion) {
                if(ex.id === exercise.id){
                    return;
                }
            }
            this.tempRoutine.elongacion.push(exercise);
        }
    },

    //TODO: ver como eliminar del temp los ejercicios cuando estoy creando la rutina
    remove(id, category){
        if(category === 'principal'){
            this.removePrin(id);
        }
        else if( category === 'elongación'){
            this.removeElon(id)
        }
        this.removeEntrada();
    },


    removePrin(id){
        for(let i = 0; i < this.tempRoutine.principal.length; i++){
            if ( this.tempRoutine.principal[i] === id) {
                this.tempRoutine.principal.splice(i, 1);
            }
        }
    },

    removeElon(id){
        function deleteId(num) {
            return num !== id
        }
        this.tempRoutine.elongacion = this.tempRoutine.elongacion.filter(deleteId);
    },

    removeEntrada(id){
        function deleteId(num) {
            return num === id
        }
        this.tempRoutine.entradaEnCalor = this.tempRoutine.entradaEnCalor.filter(deleteId);
    },

    vaciarTemp(){
        this.tempRoutine.titulo = "";
        this.tempRoutine.detail= "";
        this.popup = false;
        this.tempRoutine.estrellas= null;
        this.tempRoutine.disciplina= null;
        this.tempRoutine.repeticionesEntradaEnCalor= 1;
        this.tempRoutine.repeticionesPrincipal= 1;
        this.tempRoutine.repeticionesElongacion= 1;
        this.tempRoutine.isPublic= false;
        this.tempRoutine.category= {
            id: null,
            name: "",
            detail: null,
        };
        this.tempRoutine.entradaEnCalor= [];
        this.tempRoutine.principal= [];
        this.tempRoutine.elongacion= [];
        this.edit = false;
    },

    async cargarTemp(routine){
        this.rutineAEditar = routine;
        this.tempRoutine.titulo = routine.name;
        this.tempRoutine.detail= routine.detail;
        this.tempRoutine.estrellas= null;
        this.tempRoutine.disciplina= null;
        this.tempRoutine.entradaEnCalor= [];
        this.tempRoutine.principal= [];
        this.tempRoutine.elongacion= [];
        let cycles = (await RoutineApi.retriveCycles(routine.id, false)).content;
        for (const cycle of cycles) {
            if(cycle.type === "warmup"){
                this.tempRoutine.repeticionesEntradaEnCalor = cycle.repetitions;
                let warmup = (await CycleApi.retrieveCycle(cycle.id)).content;
                for (const warmupElement of warmup) {
                    this.currentSeccion = "entradaEnCalor";
                    this.addExercise(warmupElement.exercise);
                }
            }
            else if(cycle.type === "exercise"){
                this.tempRoutine.repeticionesPrincipal = cycle.repetitions;
                let principal = (await CycleApi.retrieveCycle(cycle.id)).content;
                for (const prinElement of principal) {
                    this.currentSeccion = "principal";
                    this.addExercise(prinElement.exercise);
                }
            }
            else {
                this.tempRoutine.repeticionesElongacion = cycle.repetitions;
                let cool = (await CycleApi.retrieveCycle(cycle.id)).content;
                for (const coolElement of cool) {
                    this.currentSeccion = "elongacion";
                    this.addExercise(coolElement.exercise);
                }
            }
        }
        this.tempRoutine.isPublic= routine.isPublic;
        this.tempRoutine.category= routine.category;
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