import { Module } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";
import { getters } from './gatters'
import { mutations } from './mutations'
import { actions } from './actions'

const state: UserState = {
  username: 'aaaa',
  email: 'aaa@aaa.com',
  lastLogin: new Date(),
}

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}