<template>
  <div>
    <div>{{ helloMessage }}</div>
    <div>{{ username }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserState } from "@/_demo/store/user/types";
import { RootState } from "@/_demo/store/types";

import { mutations, UserMutations } from "@/_demo/store/user/mutations";
import { UserActions } from "@/_demo/store/user/actions";

import { Action, namespace } from "vuex-class";

import store from "@/_demo/store";

const userModule = namespace("user");

@Component({
  computed: {
    helloMessage: {
      get(): string {
        return this.$store.state.helloMessage;
      },
    },
    // username: {
    //   get(): string {
    //     return this.$store.getters.getUsername;
    //   },
    //   set(value: string): void {
    //     this.$store.commit(UserMutations.SET_USERNAME, value);
    //   },
    // },
  },
})
export default class Info extends Vue {
  @userModule.Action(UserActions.loadAPIResult) loadAPIResult!: any;
  @userModule.State("email") email: any;

  mounted() {
    this.loadAPIResult().then((v: any) => {
      console.log(v);
    });

    console.log(this.email);

    store.subscribe((mutations, state) => {
      console.log("onSubscribe ",mutations);
    });

    // this.$store.dispatch(UserActions.loadAPIResult);
    setTimeout(() => {
      this.username = "Change hehehehe";
    }, 1000);
  }

  get username() {
    return this.$store.getters.getUsername;
  }
  set username(value: string) {
    this.$store.commit("user/" + UserMutations.SET_USERNAME, value);
  }
}
</script>

<style scoped>
</style>