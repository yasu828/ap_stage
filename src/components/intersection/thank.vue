<template>
  <div id="thank">
    <div class="thank-display">
      <div class="thank-frame">ありがとうございました。
      </div>
    </div>
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
      firstObserveicon()
    });

    const firstReficon = ref()

    const ThresholdList = () => {
      let thresholds = [];
      let numSteps = 10;
      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
      }
      thresholds.push(0);
      thresholds.push(1);
      return thresholds;
    }

    const firstObserveicon = (async() => {
      let options = {
        root: null,
        rootMargin: "1000px 0px -100px 0px",
        threshold: ThresholdList()
      }
      let observer;
      observer = new IntersectionObserver(firstIconIntersect, options);
      observer.observe(firstReficon.value)
    })
    let iconRatio = 0.0
    const firstIconIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio  == 1) {
          // state.MatrixIcon = -40
        }
        if (entry.intersectionRatio > iconRatio) {  // 侵入時
          // state.OpacityIcon = entry.intersectionRatio;
        } 
        else {  // 退出時
          // state.OpacityIcon = entry.intersectionRatio;
        }
        iconRatio = entry.intersectionRatio;
      });
    }

    return{
      state,
      // firstReficon,
    }
  }
})
</script>

<style lang="scss" scoped>
#thank {
  height: 100vh;
  width: 100%;
  padding: 5px;
  background-color: rgba(192, 192, 192, 0.616);
}
</style>