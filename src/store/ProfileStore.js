import {ProfileApi} from "../api/ProfileApi";

const ProfileStore = {

    userInfo: null,

    deleteAccount() {
        return ProfileApi.deleteAccount();
    },

    async readUserInfo() {
      this.userInfo = await ProfileApi.getCurrentUser()
    }
}

export default ProfileStore;