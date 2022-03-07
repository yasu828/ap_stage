<template>
  <section id="fin">
    <div class="fin-contents all-center" ref="finRef">
      <div 
        class="fin-preview"
        :class="{try:state.isActive}"
        :style="`height: ${state.height}%; width: ${state.width}%;`"
      >
        <div ref="leftReficon">
          <Transition name="list">
            <div v-show="state.listicon">
              <slot name="listicon"></slot>
            </div>
          </Transition>
        </div>
      </div>
    </div>
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
    })

    onMounted(async () => {
      leftObserveh1()
    })

    const finRef = ref()

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
        rootMargin: "1000px 0px 0px",
        threshold: ThresholdList()
      }
      let observerh1;
      observerh1 = new IntersectionObserver(leftH1Intersect, options);
      observerh1.observe(finRef.value)
    })
    let finRatio = 0.0
    const leftH1Intersect = (entries:any) => {
      entries.forEach((entry:any) => {
        // if (entry.intersectionRatio == 0) {
        //   state.height = 0
        // }
        if (state.height >= 97) {
          state.isActive = true
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

    return {
      state,
      finRef,
    }
  },
})
</script>

<style lang="scss">
#fin {
  height: 200vh;
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
      // max-width: 1400px;
      // max-height: 550px;
    }
  }
  .try {
    position: fixed;
    top: 0;
    left: 0;
  }
  .hu {
    // height: 150px;
    height: calc(100vh - 105px);
    width: 50%;
    background-color: darkkhaki;
    border: solid;
  }
}
</style>
