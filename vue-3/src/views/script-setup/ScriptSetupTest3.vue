<template>
  <div class="wrapper">
    <button @click="inc">{{ obj.value }}</button>
  </div>
</template>
<script>
export default {
  name: "ScriptSetupTest3"
};
</script>
<script setup>
import { reactive } from "vue";
const obj = reactive({ value: 20 });
const inc = () => obj.value++;
</script>
<style lang="less" scoped>
.wrapper {
  margin: 1em;
  padding: 1em;
  border: 1px solid yellowgreen;
}
</style>
