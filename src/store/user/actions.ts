import { ActionTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";

export enum UserActions {
  loadAPIResult = 'loadAPIResult',
}

export const actions: ActionTree<UserState, RootState> = {
  [UserActions.loadAPIResult]({ commit }): Promise<Response> {
    return fetch('https://cat-fact.herokuapp.com/facts').then(data => data.json()).then(data => {
      // commit('SET_CAT_FACTS', data)
      return data
    })
  }
}