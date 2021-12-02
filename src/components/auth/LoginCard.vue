<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title class="custom-v-card-title">
      <v-spacer></v-spacer>
      Sign in
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
          <v-btn large rounded @click="clickSignin">Sign in</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div>or</div>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <a :href="'#' + AuthPath.signup" class="text-decoration-none">
            Sign up
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
export default class LoginCard extends Vue {
  @Ref("formLogin") readonly formLogin!: VForm;
  AuthPath = AuthPath;

  // form
  loginValid = false;
  username = "admin";
  usernameRules = [(v: string) => !!v || "Username is required"];
  password = "1234";
  passwordRules = [(v: string) => !!v || "Password is required"];

  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  // bt click
  clickSignup() {
    this.$router.push({ path: AuthPath.signup });
  }
  clickSignin() {
    if (this.formLogin.validate()) {
      console.log("validate pass");
      this.$router.push({ path: "/" });
    }
  }

  // hooks
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