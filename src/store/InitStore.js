import {CategoryApi} from "../api/CategoryApi";

const InitStore = {
    async createCategories() {
        console.log('Cree las rutinas');
        if (this.found && this.correctCode) {
            let enCasa = {
                name: "En Casa",
                detail: "en casa",
            }
            await CategoryApi.addCategory(enCasa, null);
            let pesas = {
                name: "Pesas",
                detail: "pesas",
            }
            await CategoryApi.addCategory(pesas, null);
            let runninng = {
                name: "Running",
                detail: "running",
            }
            await CategoryApi.addCategory(runninng, null);
            this.connect = true;
        }
    },
}

export default InitStore;