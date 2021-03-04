<template>
  <div>
    <div class="wrapper mb-2">
      <span>ref: </span>
      <button @click="inc">{{ count }}</button>
      <button @click="() => theCount++">{{ theCount }}</button>
    </div>
    <div class="wrapper mb-2">
      <span>toRef: </span>
      <button @click="inc2"> {{ objCount }} </button>
    </div>
    <div class="wrapper mb-2">
      <span>toRefs: </span>
      <button @click="inc31">{{ obj2Number }}</button>
      <button @click="inc32">{{ obj2Count }}</button>
      <button>{{ _obj2Count }}</button>
      <button>{{ _obj2Number }}</button>
    </div>

    <div class="wrapper mb-2">
      <span>customRef: </span>
      <button @click="() => even ++">{{ even }}</button>
    </div>

    <div class="wrapper mb-2">
      <span>shallowRef: </span>
      <button @click="inc4">{{ obj4 }}</button>
    </div>
  </div>
</template>
<script>
import { ref, unref, reactive, toRef, toRefs, customRef, shallowRef } from "vue";
export default {
  name: "RefsApiTest",
  setup() {
    let count = ref(10);
    let inc = () => count.value ++;
    let theCount = unref(count);

    let obj = reactive({count: 10});
    let objCount = toRef(obj, "count");
    let inc2 = () => obj.count ++;

    let obj2 = reactive({obj2Count: 10, obj2Number: 20});
    let {obj2Count: _obj2Count,obj2Number: _obj2Number } = obj2;
    let {obj2Count, obj2Number} = toRefs(obj2);

    let inc31 = () => obj2.obj2Number ++;
    let inc32 = () => obj2.obj2Count ++;

    let obj4 = shallowRef({count: 10});
    let inc4 = () => obj4.value = {count: 30};

    return {
      count,
      inc,
      theCount,

      inc2,
      objCount,

      _obj2Count,
      _obj2Number,
      obj2Count,
      obj2Number,
      inc31,
      inc32,

      obj4,
      inc4
    }
  },
  data() {
    return {
      even: this.refEven(0)
    };
  },
  methods: {
    refEven(value) {
      return customRef((track, trigger) => {
        return {
          get() {
            if(value % 2 == 0) {
              track();
              return value;
            } else {
              track();
              return value + 1;
            }
          },
          set(newValue) {
            value = newValue;
            trigger();
          }
        }
      })
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  border: 1px solid yellowgreen;
  padding: 1em 3em;
}
.mb-2 {
  margin-bottom: 2em;
}
</style>
