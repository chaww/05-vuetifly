<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const defaultLayout = "default";

@Component
export default class AppLayout extends Vue {
  get layout() {
    const layout = this.$route.meta.layout || defaultLayout;
    // console.log(this.$route.meta.layout);
    return () => import(`./${layout}.vue`);
  }
}
</script>

<style scoped>
</style>