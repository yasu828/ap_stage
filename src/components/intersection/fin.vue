<template>
  <div id="fin">
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      listspan: false,
      listh1: false,
      listicon: false,
    })

    onMounted(async () => {
      leftObserveh1()
    })

    const leftRefh1 = ref()

    const ThresholdList = () => {
      let thresholds = [];
      let numSteps = 50;
      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
      }
      thresholds.push(0);
      thresholds.push(1);
      return thresholds;
    }

    const leftObserveh1 = (async() => {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: ThresholdList()
      }
      let observerh1;
      observerh1 = new IntersectionObserver(leftH1Intersect, options);
      observerh1.observe(leftRefh1.value)
    })

    let finRatio = 0.0
    const leftH1Intersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio == 0) {
          state.listh1 = false
        }
        if (entry.intersectionRatio == 1) {
          state.listh1 = true
        }
        if (entry.intersectionRatio > finRatio) {
          entry.target.style.backgroundColor = finRatio;
        } else {
          entry.target.style.backgroundColor = finRatio;
        }
        finRatio = entry.intersectionRatio;
      });
    }

    return {
      state,
      leftRefh1,
    }
  },
})
</script>

<style lang="scss">
#fin {
  height: 100vh;
  width: 100%;
  padding: 5px;
  background-color: rgba(192, 192, 192, 0.555);
}
</style>
