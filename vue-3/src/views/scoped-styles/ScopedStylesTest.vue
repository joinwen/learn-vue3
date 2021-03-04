<template>
  <div class="wrapper">
    <p class="title">hello flywen</p>
    <slot-demo>
      <template v-slot:demo>
        <h2>hello slot demo</h2>
      </template>
    </slot-demo>
  </div>
</template>
<script>
import SlotDemo from "@/views/scoped-styles/components/SlotDemo";
export default {
  name: "ScopedStylesTest",
  components: {SlotDemo},
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
:global(.title) {
  font-size: 24px;
  background: #42b983;
}
</style>
