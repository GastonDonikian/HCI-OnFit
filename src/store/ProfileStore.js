import {ProfileApi} from "../api/ProfileApi";

const ProfileStore = {

    deleteAccount() {
        ProfileApi.deleteAccount();
    },

    getCurrentUser() {
        ProfileApi.getCurrentUser();
    }
}

export default ProfileStore;