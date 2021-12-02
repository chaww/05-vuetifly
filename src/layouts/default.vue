<template>
  <!-- <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app> -->
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Default extends Vue {}
</script>

<style scoped>
</style>