import {ProfileApi} from "../api/ProfileApi";
import {ExerciseApi} from "../api/ExerciseApi";

const ProfileStore = {

    userInfo: null,
    extendedUserInfo: null,
    availableAvatar: false,

    async deleteAccount() {
        return ProfileApi.deleteAccount();
    },

    async readUserInfo() {
      this.userInfo = await ProfileApi.getCurrentUser();
      return this.userInfo;
    },

    async modifyAccount(userInfo) {
       return await ProfileApi.modifyAccount(userInfo);
    },

    async getRoutineCount() {
        return (await ProfileApi.getAllRoutines()).content.length;
    },

    async getExerciseCount() {
        return (await ExerciseApi.getExercises()).length;
    }
}

export default ProfileStore;