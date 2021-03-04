<template>
  <div class="wrapper">
    <button @click="inc">{{ count }}</button>
  </div>
</template>
<script>
export default {
  name: "ScriptSetupTest2"
};
</script>
<script setup>
import { ref } from "vue";
const count = ref(0);
const inc = () => count.value ++;
</script>
<style lang="less" scoped>
.wrapper {
  margin: 1em;
  padding: 1em;
  border: 1px solid yellowgreen;
}
</style>
