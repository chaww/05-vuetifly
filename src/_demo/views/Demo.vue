<template>
  <v-app>
    <v-main>
      <div class="page-wrapper">
        <Info />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Info from "../components/Info.vue";

@Component({
  components: {
    Info,
  },
})
export default class Demo extends Vue {
  
}
</script>

<style scoped>
.page-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>