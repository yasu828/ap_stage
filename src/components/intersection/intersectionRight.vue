<template>
  <div id="inter-left">
    <div class="contents">
      <!-- アイコン -->
      <div class="left-reficon">
        <div ref="leftReficon">
          <transition name="list">
            <div v-show="state.listicon">
              <slot name="listicon"></slot>
            </div>
          </transition>
        </div>
      </div>
      <!-- タイトル -->
      <div class="left-refh1">
        <div ref="leftRefh1">
          <transition name="list">
            <div v-show="state.listh1">
              <h1 class="inter-h1">
                <slot name="listh1"></slot>
              </h1>
            </div>
          </transition>
        </div>
      </div>
      <!-- コンテンツ -->
      <div class="left-refspan">
        <div ref="leftRefspan">
          <transition name="list">
            <div v-show="state.listspan">
              <span class="inter-span">
                <slot name="listspan"></slot>
              </span>
            </div>
          </transition>
        </div>
      </div>
    </div>
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
      leftObserveicon()
      leftObserveh1()
      leftObservespan()
    })

    const leftRefspan = ref()
    const leftRefh1 = ref()
    const leftReficon = ref()

    const ThresholdList = () => {
      let thresholds = [];
      let numSteps = 0;
      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
      }
      thresholds.push(0);
      thresholds.push(1);
      return thresholds;
    }

    const leftObserveicon = (async() => {
      let options = {
        root: null,
        rootMargin: "1000px 0px -150px 0px",
        threshold: ThresholdList()
      }
      let observer;
      observer = new IntersectionObserver(lefticonintersect, options);
      observer.observe(leftReficon.value)
    })
    const lefticonintersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio == 0) {
          state.listicon = false
        }
        if (entry.intersectionRatio == 1) {
          state.listicon = true
        }
      });
    }

    const leftObservespan = (async() => {
      let options = {
        root: null,
        rootMargin: "1000px 0px -270px 0px",
        threshold: ThresholdList()
      }
      let observer;
      observer = new IntersectionObserver(leftspanintersect, options);
      observer.observe(leftRefspan.value)
    })
    const leftspanintersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio == 0) {
          state.listspan = false
        }
        if (entry.intersectionRatio == 1) {
          state.listspan = true
        }
      });
    }

    const leftObserveh1 = (async() => {
      let options = {
        root: null,
        rootMargin: "1000px 0px -200px 0px",
        threshold: ThresholdList()
      }
      let observerh1;
      observerh1 = new IntersectionObserver(leftH1Intersect, options);
      observerh1.observe(leftRefh1.value)
    })
    const leftH1Intersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio == 0) {
          state.listh1 = false
        }
        if (entry.intersectionRatio == 1) {
          state.listh1 = true
        }
      });
    }

    return {
      state,
      leftRefspan,
      leftRefh1,
      leftReficon,
    }
  },
})
</script>

<style lang="scss">
#inter-left {
  min-height: 250px;
  width: 100%;
  max-width: 100%;
  // background-color: rgba(128, 128, 128, 0.502);
  overflow-wrap: break-word;

  .contents {
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    width: 65%;
  }

  // .list-enter-active,
  // .list-leave-active {
  //   transition: 0.7s ease;
  // }
  // .list-enter-from,
  // .list-leave-to {
  //   opacity: 0;
  //   transform: translateY(40px);
  // }

  .left-reficon {
    height: 40px;
    width: 40px;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-refh1 {
    height: 50px;

    .inter-h1 {
      font-size: 40px;
      line-height: 1.1;
      font-weight: 600;
    }
  }
  .left-refspan {
    height: 80px;

    .inter-span {
      font-size: 19px;
      line-height: 1.4211026316;
      font-weight: 400;
      letter-spacing: .012em;
    }
  }
}
</style>
