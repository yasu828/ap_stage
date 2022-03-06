<template>
  <section 
  class="t-center"
  id="section1"
  >
  <div>
    <span class="pd20">
      動きのあるwebサイトで体験を届けたい<br>
      interseciton observer APIに注目したページです。
    </span>
  </div>
    <div
    ref="targetBox"
    class="up15vh"
    >
      <div :style="`opacity:${state.overlap}; transform: matrix(1, 0, 0, 1, 0, ${state.trans});`">
        <h1 style="font-size: 21px;">
          上昇します。
        </h1>
        <h3 style="font-size: 64px; margin-top: 17px;">
          上昇します。上昇します。
        </h3>
        <p style="font-size: 21px; margin: 27px auto;">
          上昇します。上昇します。上昇します。上昇します。<br>
          上昇します。上昇します。上昇します。<br>
          上昇します。上昇します。<br>
        </p>
      </div>
      <div class="t-center" style="margin: 185px 0;">
        <div :style="`
        background: ${state.linear}(45deg,rgb(255, 37, 37)${0 - state.num}%,rgb(255, 230, 37)${100 - state.num}%,rgb(165, 37, 255)${170 - state.num}%);
        font-size: 4rem;
        font-weight: bold;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;`"
        >
          グラデーションカラー
        </div>
      </div>
    </div>
  </section>
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
      trans: 155.0,
      linear: 'linear-gradient',
      num:10.0,
      showte: false,
    })

    function buildThresholdList() {
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

    onMounted(async() => {
      await obse()
    })

    const targetBox = ref()

    const obse = (async() => {
      let options = {
        root: null,
        rootMargin: "-105px",
        threshold: buildThresholdList()
      }
      let observer;
      observer = new IntersectionObserver(bhandleIntersect, options);
      observer.observe(targetBox.value)
    })

    let guRatio = 0.0;
    const bhandleIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if(state.overlap <= 0.8 && state.overlap > 0){
          state.trans = entry.intersectionRatio * 200
        }
        if (entry.intersectionRatio > guRatio) {
          state.overlap = entry.intersectionRatio;
          state.num = Math.round(entry.intersectionRatio * 100);
        } else {
          state.overlap = entry.intersectionRatio;
          state.num = Math.round(entry.intersectionRatio * 100);
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
#section1 {
  width: 100%;
  height: 100%;
  min-height: 570px;

  .pd20 {
    display: inline-block;
    transform: matrix(1, 0, 0, 1, 0, 50);
  }

  // .a15vh {
  //   display: inline-block;
  //   height: 100px;
  //   width: 100%;
  // }
  .up15vh {
    animation: imagesTextLeft 1s;
    height: 300px;
  }
  @keyframes imagesTextLeft {
    from{
      transform: translate(0, 15vh);
      opacity: 0.1;
    }
  }
}
</style>