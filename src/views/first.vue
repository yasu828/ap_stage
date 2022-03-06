<template>
  <div id="first">
    <!-- アイコン -->
    <section class="section-icon">
      <div style="height: 40px;"></div>
      <div
        ref="firstReficon" 
        class="font" 
        :style="`opacity:${state.OpacityIcon}; transform: matrix(1, 0, 0, 1, 0, ${state.MatrixIcon});`"
      >
        <slot name="listicon">safdd</slot>
      </div>
    </section>
    <!-- タイトル -->
    <section class="section-icon">
      <div style="height: 40px;"></div>
      <div
        ref="firstRefh1" 
        class="" 
        :style="`opacity:${state.OpacityH1}; transform: matrix(1, 0, 0, 1, 0, ${state.MatrixH1});`"
      >
        <slot name="listh1">H1タイトル</slot>
      </div>
    </section>
    <!-- コンテンツ -->
    <section class="section-icon">
      <div style="height: 40px;"></div>
      <div
        ref="firstRefspan" 
        class="font" 
        :style="`opacity:${state.OpacitySpan}; transform: matrix(1, 0, 0, 1, 0, ${state.MatrixSpan});`"
      >
        <slot name="listspan">safdd</slot>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'


export default defineComponent({
  components:{},
  setup() {
    const state = reactive({
      OpacityIcon: 0.5,
      MatrixIcon: -40,
      OpacityH1: 0.5,
      MatrixH1: -40,
      OpacitySpan: 0.5,
      MatrixSpan: -40,
    })

    onMounted(() => {
      console.log("Contents2")
      firstObserveicon()
    });

    const firstReficon = ref()

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
    let opaRatio = 0.0
    const firstIconIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio  == 1) {
          state.MatrixIcon = -40
        }
        if (entry.intersectionRatio > opaRatio) {  // 侵入時
          if (entry.intersectionRatio <= 0.4) {
            state.MatrixIcon = entry.intersectionRatio * -100
          }
          else {
            state.MatrixIcon = -40
          }
          state.OpacityIcon = entry.intersectionRatio;
        } 
        else {  // 退出時
          if (entry.intersectionRatio <= 0.4) {
            state.MatrixIcon = entry.intersectionRatio * -100
          }
          state.OpacityIcon = entry.intersectionRatio;
        }
        opaRatio = entry.intersectionRatio;
      });
    }
  


    return{
      state,
      firstReficon,
    }
  }
})
</script>

<style lang="scss" scoped>
#first {
  background-color: rgb(255, 215, 0, 0.2);
  min-height: 250px;
  width: 100%;
  max-width: 100%;
  overflow-wrap: break-word;

  .first-left {
    height: 20px;
    background-color: gold;
  }
  .font {
    font-size: 40px;
    margin: 20px 0;
    height: 40px;
  }
  .section-icon {
    height: 80px;
  }
}
</style>