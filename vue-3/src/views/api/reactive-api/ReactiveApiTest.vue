<template>
  <div>
    <div class="mb-2">
      <span>goods count：</span>
      <button @click="inc">{{ goods.count }}</button>
    </div>
    <div class="mb-2">
      <span>human quantity：</span>
      <button @click="inc2">{{ human.count }}</button>
    </div>
    <div>
      <span>fish count：</span>
      <button @click="inc3">{{ fish.count }}</button>
    </div>
    <div class="mb-2">
      <span>fish yellow count: </span>
      <button @click="inc32">{{ fish.yellow.count }}</button>
    </div>
    <div>
      <span>dog count：</span>
      <button @click="inc4">{{ dog.count }}</button>
    </div>
    <div>
      <span>dog yellow count：</span>
      <button @click="inc42">{{ dog.yellow.count }}</button>
    </div>
  </div>
</template>
<script>
import { reactive, readonly, shallowReactive, shallowReadonly } from "vue";
export default {
  name: "ReactiveApiTest",
  setup() {
    const goods = reactive({count: 10})
    const inc = () => goods.count ++;

    const human = readonly(reactive({ count: 20}));
    const inc2 = () => human.count ++;

    const fish = shallowReactive({count: 30, yellow: { count: 30}});
    const inc3 = () => fish.count ++;
    const inc32 = () => fish.yellow.count ++;

    const dog = shallowReadonly(reactive({count: 40, yellow: { count: 40}}));
    const inc4 = () => dog.count ++;
    const inc42 = () => dog.yellow.count ++;

    return {
      goods,
      inc,
      human,
      inc2,
      fish,
      inc3,
      inc32,
      dog,
      inc4,
      inc42
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.mb-2 {
  margin-bottom: 2em;
}
</style>
