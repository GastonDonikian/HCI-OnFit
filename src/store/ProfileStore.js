import {ProfileApi} from "../api/ProfileApi";

const ProfileStore = {

    userInfo: null,
    extendedUserInfo: null,

    async deleteAccount() {
        return ProfileApi.deleteAccount();
    },

    async readUserInfo() {
      this.userInfo = await ProfileApi.getCurrentUser();
    },

    async modifyAccount(userInfo) {
       return await ProfileApi.modifyAccount(userInfo);
    }
}

export default ProfileStore;