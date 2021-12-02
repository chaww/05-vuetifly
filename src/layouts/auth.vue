<template>
  <v-app>
    <v-main>
      <div class="page-wrapper">
        <v-expand-x-transition>
          <router-view />
        </v-expand-x-transition>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Auth extends Vue {}
</script>

<style>
.page-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>