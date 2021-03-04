<template>
  <div class="wrapper">
    <button @click="inc">{{ count }}</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "ScriptSetupTest",
  setup() {
    const count = ref(0);
    const inc = () => count.value ++;
    return {
      count,
      inc
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.wrapper {
  margin: 1em;
  padding: 1em;
  border: 1px solid yellowgreen;
}
</style>
