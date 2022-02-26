<template>
<section class="height"></section>
<div class="pu">
  <section 
  class="t-center"
  id="target-box"
  >
  <!-- <div class="bo">
    <div class="bo2">2trreddddd</div>
  </div> -->
    <div :class="{up15vh: state.isActive}" :style="`opacity:${state.overlap}; transform: matrix(1, 0, 0, 1, 0, -${state.trans});`" ref="targetBox">
      <h1 class="m-5">
        iPhone 13 Pro
      </h1>
      <h3 class="m">
        すべてがプロ
      </h3>
      <p class="m">
        iPhone 13 Proの進化は圧倒的。何をする時でも驚くような<br>
        スピードをもたらし、写真撮影とビデオ撮影の常識を一変させます。<br>
        魅力的な2つのサイズから選びましょう。
      </p>
    </div>
  </section>
  </div>
<section class="height"></section>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'

export default defineComponent({
  components:{},
  setup() {
    const state = reactive({
      isActive: false,
      fixed: "nat",
      overlap: 0.0,
      trans: 1.0,
    })
    function buildThresholdList() { // thresholdの値をpushしている。numStep(20等分(5%毎))を指定
      let thresholds = [];
      let numSteps = 30;
      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
      }
      thresholds.push(0);
      thresholds.push(1);
      return thresholds;
    }
    onMounted(async() => {
      await obse()
    })

    const obse = (async() => {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
      }
      let observer;
      observer = new IntersectionObserver(bhandleIntersect, options);
      observer.observe(targetBox.value)
    })
    let targetBox = ref()
    let guRatio = 0.0;
    const bhandleIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if(entry.isIntersecting){
          state.isActive = true;
          console.log("111")
          console.log(entry)
        }
        if(entry.intersectionRatio == 0 ){
          console.log("222")
          console.log(entry)
          state.isActive = false;
        }
        if(entry.intersectionRatio >= 1 ){
          console.log("333")
        }
        if(entry.intersectionRatio <= 0.7 ){
          state.trans = entry.intersectionRatio * 100
          console.log("444")
          console.log(entry)
        }
        if (entry.intersectionRatio > guRatio) {
          state.overlap = guRatio;
        } else {
          state.overlap = guRatio;
        }
        guRatio = entry.intersectionRatio;
      });
    }

    return{
      state,
      obse,
      targetBox,
    }
  }
})
</script>

<style lang="scss" scoped>
.height {
  height: 105vh;
}
// .bo {
//   height: 100vh;
//   width: 100vw;
//   background-color: fuchsia;
// }
// .bo2 {
//   // height: 100%;
//   // width: 100%;
//   background-color: firebrick;
//   margin:  40vh;
//   color: aqua;
// }
.pu {
  border: black solid;
}
#target-box {
  .m {
    margin: 20px auto 0;
  }
  .m-5 {
    margin: 50px auto 0;
  }
  .up15vh {
    color: coral;
    animation: imagesTextLeft 1s;
  }
  @keyframes imagesTextLeft {
    from{
      transform: translate(0, 15vh);
    }
  }
}
</style>