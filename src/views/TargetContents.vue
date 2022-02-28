<template>
  <section class="height"></section>
  <section 
  class="t-center"
  id="section1"
  >
    <div 
    class="p-5"
    :class="{up15vh: true}"
    ref="targetBox"
    >
      <div :style="`opacity:${state.overlap}; transform: matrix(1, 0, 0, 1, 0, ${state.trans});`">
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
    </div>
  </section>
  <section class="height"></section>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'
// import RootLine from "../components/ex/rootline.vue";

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
      let numSteps = 20;
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

      const targetBox = ref()

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
    let guRatio = 0.0;
    const bhandleIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if(state.overlap <= 0.7 && state.overlap > 0){
          state.trans = entry.intersectionRatio * 100
          console.log(entry.intersectionRatio)
        }
        if (entry.intersectionRatio > guRatio) {
          state.overlap = entry.intersectionRatio;
          console.log("いん")
        } else {
          state.overlap = entry.intersectionRatio;
          console.log("アウト")
        }
        guRatio = entry.intersectionRatio;
      });
    }

    const onClicknum = () => {
      console.log(screen.width)
      console.log(targetBox.value)
      console.log(targetBox)
      console.log(screen.height - 100 + "px")
    }

    return{
      state,
      obse,
      targetBox,
      onClicknum,
    }
  }
})
</script>

<style lang="scss" scoped>
.height {
  height: 150vh;
}
#section1 {
  width: 100%;
  height: 100px;
  background-color: rgba(169, 169, 169, 0.3);

  .m {
    margin: 20px auto 0;
  }
  .m-5 {
    margin: 150px auto 0;
  }
  .p-5 {
    border: solid;
    padding: 100px;
  }
  .up15vh {
    color: coral;
    animation: imagesTextLeft 1s;
    height: 100px;
    background-color: darkolivegreen;
  }
  @keyframes imagesTextLeft {
    from{
      transform: translate(0, 15vh);
    }
  }
}
</style>