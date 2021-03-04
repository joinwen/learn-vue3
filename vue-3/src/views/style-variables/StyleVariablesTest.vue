<template>
  <div class="text">
    <p>hello flywen</p>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      color: "red",
      font: {
        size: "4em"
      }
    };
  }
};
</script>
<style lang="less" scoped>
.text {
  color: v-bind(color);

  font-size: v-bind("font.size");
}
</style>
