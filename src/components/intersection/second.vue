<template>
  <div id="second">
    <div class="contents">
      <section class="section-icon">
        <div style="height: 40px;"></div>
        <div
          ref="secondReficon" 
          class="font-icon" 
          :style="`opacity:${state.OpacityIcon}; transform: matrix(1, 0, 0, 1, 0, ${state.MatrixIcon});`"
        >
          <slot name="listicon">safdd</slot>
        </div>
      </section>
      <!-- タイトル -->
      <section class="section-h1">
        <div style="height: 40px;"></div>
        <div
          ref="secondRefh1" 
          class="font-h1" 
          :style="`opacity:${state.OpacityH1}; transform: matrix(1, 0, 0, 1, 0, ${state.MatrixH1});`"
        >
          <slot name="listh1">H1タイトル</slot>
        </div>
      </section>
      <!-- コンテンツ -->
      <section class="section-span">
        <div style="height: 40px;"></div>
        <div
          ref="secondRefspan" 
          class="font-span" 
          :style="`opacity:${state.OpacitySpan}; transform: matrix(1, 0, 0, 1, 0, ${state.MatrixSpan});`"
        >
          <slot name="listspan">safdd</slot>
        </div>
      </section>
    </div>
    <!-- アイコン -->
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
      MatrixH1: -60,
      OpacitySpan: 0.5,
      MatrixSpan: -60,
    })

    onMounted(() => {
      secondObserveicon()
      secondObserveh1()
      secondObservespan()
    });

    const secondReficon = ref()
    const secondRefh1 = ref()
    const secondRefspan = ref()

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

    const secondObserveicon = (async() => {
      let options = {
        root: null,
        rootMargin: "1000px 0px -120px 0px",
        threshold: ThresholdList()
      }
      let observer;
      observer = new IntersectionObserver(secondIconIntersect, options);
      observer.observe(secondReficon.value)
    })
    let iconRatio = 0.0
    const secondIconIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio  == 1) {
          state.MatrixIcon = -40
        }
        if (entry.intersectionRatio > iconRatio) {  // 侵入時
          if (entry.intersectionRatio <= 0.6) {
            state.MatrixIcon = entry.intersectionRatio * -100
          }
          else {
            state.MatrixIcon = -40
          }
          state.OpacityIcon = entry.intersectionRatio;
        } 
        else {  // 退出時
          if (entry.intersectionRatio <= 0.6) {
            state.MatrixIcon = entry.intersectionRatio * -100
          }
          state.OpacityIcon = entry.intersectionRatio;
        }
        iconRatio = entry.intersectionRatio;
      });
    }

    const secondObserveh1 = (async() => {
      let options = {
        root: null,
        rootMargin: "1000px 0px -120px 0px",
        threshold: ThresholdList()
      }
      let H1observer;
      H1observer = new IntersectionObserver(secondH1Intersect, options);
      H1observer.observe(secondRefh1.value)
    })
    let opaRatio = 0.0
    const secondH1Intersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio  == 1) {
          state.MatrixH1 = -60
        }
        if (entry.intersectionRatio > opaRatio) {  // 侵入時
          if (entry.intersectionRatio <= 0.6) {
            state.MatrixH1 = entry.intersectionRatio * -100
          }
          else {
            state.MatrixH1 = -60
          }
          state.OpacityH1 = entry.intersectionRatio;
        } 
        else {  // 退出時
          if (entry.intersectionRatio <= 0.6) {
            state.MatrixH1 = entry.intersectionRatio * -100
          }
          state.OpacityH1 = entry.intersectionRatio;
        }
        opaRatio = entry.intersectionRatio;
      });
    }

    const secondObservespan = (async() => {
      let options = {
        root: null,
        rootMargin: "1000px 0px -120px 0px",
        threshold: ThresholdList()
      }
      let spanobserver;
      spanobserver = new IntersectionObserver(secondSpanIntersect, options);
      spanobserver.observe(secondRefspan.value)
    })
    let spanRatio = 0.0
    const secondSpanIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio  == 1) {
          state.MatrixSpan = -60
        }
        if (entry.intersectionRatio > spanRatio) {  // 侵入時
          if (entry.intersectionRatio <= 0.6) {
            state.MatrixSpan = entry.intersectionRatio * -100
          }
          else {
            state.MatrixSpan = -60
          }
          state.OpacitySpan = entry.intersectionRatio;
        } 
        else {  // 退出時
          if (entry.intersectionRatio <= 0.6) {
            state.MatrixSpan = entry.intersectionRatio * -100
          }
          state.OpacitySpan = entry.intersectionRatio;
        }
        spanRatio = entry.intersectionRatio;
      });
    }
  


    return{
      state,
      secondReficon,
      secondRefh1,
      secondRefspan,
    }
  }
})
</script>

<style lang="scss" scoped>
#second {
  background-color: rgb(255, 215, 0, 0.2);
  min-height: 200px;
  width: 100%;
  max-width: 100%;
  overflow-wrap: break-word;

  .contents {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0px auto;
    width: 65%;
  }

  .second-left {
    height: 20px;
  }
  .font-icon {
    font-size: 26px;
    // margin: 20px 0;
    height: 26px;
  }
  .section-icon {
    height: 66px;
  }
  .font-h1 {
    font-size: 40px;
    // margin: 20px 0;
    height: 40px;
  }
  .section-h1 {
    height: 40px;
  }
  .font-span {
    font-size: 19px;
    margin: 20px 0;
    height: 19px;
  }
  .section-span {
    height: 60px;
  }
}
</style>