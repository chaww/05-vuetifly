import { Module } from "vuex";
import { RootState } from "@/store/types";
import { UserState } from "@/store/user/types";
import { getters } from '@/store/user/gatters'
import { mutations } from '@/store/user/mutations'
import { actions } from '@/store/user/actions'

const state: UserState = {
  username: 'aaaa',
  email: 'aaa@aaa.com',
  lastLogin: new Date(),
  permission: {
    menuA: false,
    menuB: false,
    menuC: false,
    menuD: false,
  }
}

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}