<template>
  <div>
    <p>
      slot begin
      <slot name="demo"></slot>
      slot end
    </p>
  </div>
</template>
<script>
export default {
  name: "SlotDemo",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
:slotted(h2) {
  color: yellowgreen;
}
</style>
