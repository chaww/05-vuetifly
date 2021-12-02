import { MutationTree } from "vuex";
import { UserState, UserStatePermissionMenu } from "./types";

export enum UserMutations {
  SET_PERMISSION = "SET_PERMISSION",
}

export const mutations: MutationTree<UserState> = {
  [UserMutations.SET_PERMISSION](state, payload: UserStatePermissionMenu) {
    state.permission = payload;
  }
}