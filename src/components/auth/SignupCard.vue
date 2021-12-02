<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title class="custom-v-card-title">
      <v-spacer></v-spacer>
      Sign up
      <v-spacer></v-spacer>
    </v-card-title>
    <!-- form -->
    <v-form v-model="loginValid" ref="formLogin">
      <v-container class="custom-v-container">
        <!-- username -->
        <v-text-field
          v-model="username"
          :rules="usernameRules"
          autocomplete="email"
          name="email"
          label="Username"
          type="text"
          required
        ></v-text-field>
        <!-- password -->
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          autocomplete="current-password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          @click:append="toggleShowPassword"
          :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          required
        ></v-text-field>
      </v-container>
      <v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn large rounded @click="clickSignup">Sign up</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div>or</div>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <a :href="'#' + AuthPath.signin" class="text-decoration-none">
            Back to Sign in
          </a>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import { VForm } from "@/types";
import { AuthPath } from "@/router/auth";

@Component
export default class SignupCard extends Vue {
  @Ref("formLogin") readonly formLogin!: VForm;
  AuthPath = AuthPath;
  // form
  loginValid = false;

  username = "";
  // usernameRules = [(v: string) => !!v || "Username is required"];
  usernameRules = [(v: string) => !!v || "Username is required"];
  password = "";
  passwordRules = [(v: string) => !!v || "Password is required"];

  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  // bt click
  clickSignup() {
    // do nothing.
  }
  clickSignin() {
    this.$router.push({ path: AuthPath.login });
  }
}
</script>

<style scoped>
.custom-v-container {
  padding-left: 30px;
  padding-right: 30px;
}
.custom-v-card-title {
  white-space: nowrap;
}
</style>