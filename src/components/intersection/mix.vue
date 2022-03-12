<template>
  <div id="mix">
    create mix
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'

export default defineComponent({
  components:{},
  setup() {
    const state = reactive({
    })

    onMounted(() => {
      mixObserve()
    });

    const mixRef = ref()

    const ThresholdList = () => {
      let thresholds = [];
      let numSteps = 100;
      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
      }
      thresholds.push(0);
      thresholds.push(1);
      return thresholds;
    }

    const mixObserve = (async() => {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: ThresholdList()
      }
      let mixobserver;
      mixobserver = new IntersectionObserver(mixIntersect, options);
      mixobserver.observe(mixRef.value)
    })

    const mixIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        console.log(entry)
      });
    }

    return{
      state,
      mixRef,
    }
  }
})
</script>

<style lang="scss" scoped>
#mix {
  width: 100%;
}
</style>