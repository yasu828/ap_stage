<template>
  <section id="fin">
    <div class="fin-contents all-center" ref="finRef">
      <div 
        class="fin-preview"
        :class="{try:state.isActive}"
        :style="`height: ${state.height}%; width: ${state.width}%;`"
      >
        <div ref="leftReficon">    
          <div v-show="state.slide" class="all-center">
            <div class="fin-slide border-radius">
              <div
                class="slide1 slide-contents border-radius all-center"
                v-if="state.slidePreview == 'slide1'"
              >
                視点を固定<br>
                スクロールでページビューを展開
              </div>
              <div
                class="slide2 slide-contents border-radius all-center"
                v-if="state.slidePreview == 'slide2'"
              >
                目次と連動<br>
                ページの現在地を表示
              </div>
              <div
                class="slide3 slide-contents border-radius all-center"
                v-if="state.slidePreview == 'slide3'"
              >
                特定のスクロール領域のみ展開
              </div>
            </div>
          </div>
          <div v-show="state.slide" class="flex j-center">
            <div
              class="mini-slide-box"
              v-for="i in 3"
              :key="i"
            >
              <div
                v-if="state.slidePreview == `slide${i}`"
                :class="`slide${i}`"
                class="mini-slide"
              >
                {{i}}
              </div>
              <div
                v-if="state.slidePreview != `slide${i}`"
                :class="`slide${i}`"
                class="mini-slide-appear"
              >
                {{i}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slidebox1" ref="slide1Ref"></div>
    <div class="slidebox2" ref="slide2Ref"></div>
    <div class="slidebox3" ref="slide3Ref"></div>
    <div style="height:60vh;"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      height: 50,
      width: 50,
      isActive:false,
      slide:false,
      slidePreview: 'slide1',
    })

    onMounted(async () => {
      previewObserveh1()
      slide1Observe()
      slide2Observe()
      slide3Observe()
    })

    const finRef = ref()
    const slide1Ref = ref()
    const slide2Ref = ref()
    const slide3Ref = ref()

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

    const previewObserveh1 = (async() => {
      let options = {
        root: null,
        rootMargin: "2000px 0px 0px",
        threshold: ThresholdList()
      }
      let observerh1;
      observerh1 = new IntersectionObserver(previewH1Intersect, options);
      observerh1.observe(finRef.value)
    })
    let finRatio = 0.0
    const previewH1Intersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio == 0) {
          state.slide = false
        }
        if (state.height >= 95) {
          state.isActive = true
          state.slide = true
        } else {
          state.isActive = false
        }
        if (entry.intersectionRatio > finRatio) {
          state.height = entry.intersectionRatio * 100;
          state.width = entry.intersectionRatio * 100;
        } else {
          state.height = entry.intersectionRatio * 100;
          state.width = entry.intersectionRatio * 100;
        }
        finRatio = entry.intersectionRatio;
      });
    }

    // スライドショー
    const slide1Observe = (async() => {
      let options = {
        root: null,
        rootMargin: "-50% 0px",
        threshold: ThresholdList(),
      }
      let slide1Observer;
      slide1Observer = new IntersectionObserver(slide1Intersect, options);
      slide1Observer.observe(slide1Ref.value)
    })
    const slide1Intersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          state.isActive = true
          state.slide = true
          state.slidePreview = 'slide1'
        }
        if (entry.intersectionRatio >= 0.95) {
          state.slidePreview = 'slide1'
        }
      });
    }
    const slide2Observe = (async() => {
      let options = {
        root: null,
        rootMargin: "-50% 0px",
        threshold: ThresholdList(),
      }
      let slide2Observer;
      slide2Observer = new IntersectionObserver(slide2Intersect, options);
      slide2Observer.observe(slide2Ref.value)
    })
    const slide2Intersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          state.isActive = true
          state.slide = true
          state.slidePreview = 'slide2'
        }
        if (entry.intersectionRatio >= 0.95) {
          state.slidePreview = 'slide2'
        }
      });
    }

    const slide3Observe = (async() => {
      let options = {
        root: null,
        rootMargin: "-50% 0px",
        threshold: ThresholdList(),
      }
      let slide3Observer;
      slide3Observer = new IntersectionObserver(slide3Intersect, options);
      slide3Observer.observe(slide3Ref.value)
    })
    const slide3Intersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          state.isActive = true
          state.slide = true
          state.slidePreview = 'slide3'
        }
        if (entry.intersectionRatio >= 0.95) {
          state.slidePreview = 'slide3'
        }
      });
    }

    return {
      state,
      finRef,
      slide1Ref,
      slide2Ref,
      slide3Ref,
    }
  },
})
</script>

<style lang="scss">
#fin {
  height: 100%;
  width: 100vw;

  .fin-contents {
    height: calc(100vh - 105px);
    min-height: 400px;
    width: 100%;

    .fin-preview {
      background-color: rgba(192, 192, 192, 0.555);
      padding: 5px;
      min-height: 400px;
      min-width: 550px;
      border-radius: 30px;

      .fin-slide {
        height: 80%;
        width: 60%;
        min-height: 400px;
        min-width: 550px;
      }
      .slide-contents {
        height: 100%;
        width: 100%;
        min-height: 400px;
        min-width: 550px;
      }
      .slide1 {
        background-color: deepskyblue;
      }
      .slide2 {
        background-color: rgb(0, 255, 21);
      }
      .slide3 {
        background-color: rgb(217, 255, 0);
      }
      .mini-slide-box {
        margin-top: 10px;
        width: 10vw;
        height: 5vw;
      }
      .mini-slide {
        width: 100%;
        height: 100%;

      }
      .mini-slide-appear {
        width: 100%;
        height: 100%;
        opacity: 0.4;
      }
    }
  }
  .try {
    position: fixed;
    top: 101px;
    left: 0;
  }
  .hu {
    height: calc(100vh - 105px);
    width: 50%;
    background-color: darkkhaki;
  }
  .slidebox1 {
    height: calc(100vh - 103px);
  }
  .slidebox2 {
    height: calc(100vh - 103px);
  }
  .slidebox3 {
    height: calc(100vh - 103px);
  }
}
</style>
