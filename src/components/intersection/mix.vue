<template>
  <div id="mix" class="w-100">
    <div class="h-50 min-h"></div>
    <p class="observer-title">左右比較</p>
    <div class="mix-ref-child hv" ref="mixRef">
      <div class="mix-box flex j-center">
        <div class="flex a-center" :style="`transform: matrix(1, 0, 0, 1, ${state.leftMatrixMix}, 0);`">
          <span class="t-center">
            orange color<br>
            version
          </span>
          <div class="mix-contents mix-p1"></div>
        </div>
        <div class="flex a-center" :style="`transform: matrix(1, 0, 0, 1, ${state.rightMatrixMix}, 0);`">
          <div class="mix-contents mix-p2">
          </div>
          <span class="t-center">
            aqua color<br>
            version
          </span>
        </div>
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
      leftMatrixMix:1.0,
      rightMatrixMix:1.0,
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
        rootMargin: "-105px 0px -10px",
        threshold: ThresholdList()
      }
      let mixobserver;
      mixobserver = new IntersectionObserver(mixIntersect, options);
      mixobserver.observe(mixRef.value)
    })
    let mixRatio = 0.5
    const mixIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio > mixRatio) {
          state.rightMatrixMix = -100 + (entry.intersectionRatio * 150)
          state.leftMatrixMix = 100 - (entry.intersectionRatio * 150)
        } else {
          state.rightMatrixMix = -100 + (entry.intersectionRatio * 150)
          state.leftMatrixMix = 100 - (entry.intersectionRatio * 150)
        }
        if (entry.isIntersecting) {
          // console.log(entry)
          console.log("message-in")
        } else {
          state.leftMatrixMix = 1.0
          console.log("message-out")
        }
        mixRatio = entry.intersectionRatio
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
  .observer-title {
    height: 40px;
    font-size: 28px;
    margin-bottom: 30px;
    text-align: center;
  }

  .min-h {
    min-height: 500px;
  }

  .mix-ref-child {
    height: calc(80vh - 105px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mix-box {
    overflow: hidden;
    
    .mix-p1 {
      height: calc(100vh / 2);
      width: calc(100vh / 3);
      background-color: orange;
    }
    .mix-p2 {
      height: calc(100vh / 3);
      width: calc(100vh / 3);
      background-color: aqua;
    }
  }
}
</style>