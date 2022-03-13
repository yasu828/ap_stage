<template>
<div id="intersection-home">
  <TargetContents />
  <p style="height:80px; font-size: 48px; padding-top:10px;" class="t-center">(opacity/transform)</p>
  <article class="flex">
    <section class="inter-section-left">
      <first v-for="(list, i) in state.lists" :key="i">
        <template v-slot:listicon>
          {{list.icon}}
        </template>
        <template v-slot:listh1>
          {{list.h1}}
        </template>
        <template v-slot:listspan>
          {{list.span}}
        </template>
      </first>
    </section>
    <section class="inter-section-left">
      <second v-for="(list, i) in state.lists" :key="i">
        <template v-slot:listicon>
          {{list.icon}}
        </template>
        <template v-slot:listh1>
          {{list.h1}}
        </template>
        <template v-slot:listspan>
          {{list.span}}
        </template>
      </second>
    </section> 
  </article>
  <p style="height:80px; font-size: 48px; padding-top:10px;" class="t-center">(transition:ture/false)</p>
  <article class="flex">
    <section class="inter-section-left">
      <intersection-left v-for="(list, i) in state.lists" :key="i">
        <template v-slot:listicon>
          {{list.icon}}
        </template>
        <template v-slot:listh1>
          {{list.h1}}
        </template>
        <template v-slot:listspan>
          {{list.span}}
        </template>
      </intersection-left>
    </section>
    <section class="inter-section-left">
      <intersection-right v-for="(list, i) in state.lists" :key="i">
        <template v-slot:listicon>
          {{list.icon}}
        </template>
        <template v-slot:listh1>
          {{list.h1}}
        </template>
        <template v-slot:listspan>
          {{list.span}}
        </template>
      </intersection-right>
    </section> 
  </article>
  <Fin />

  <Mix />
  
  <div class="w-100 h-50"></div>
  <footer class="all-center w-100 hei100">
    <div class="message-box">
      <span 
        v-for="(e, i) in state.message"
        :key="i"
        class="message"
        :style="`height: calc(100vh - 102px - (${i} * 25px));`"
      >
        {{ e }}
      </span>
    </div>
  </footer>
</div>

<div
  id="back"
  class="w-100 t-center"
  @click="onClickBack"
>
  <span class="pointer">
    TOPへ🔼
  </span>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'
import TargetContents from '../components/intersection/TargetContents.vue'
import First from '../components/intersection/first.vue'
import Second from '../components/intersection/second.vue'
import IntersectionLeft from '../components/intersection/intersectionLeft.vue'
import IntersectionRight from '../components/intersection/intersectionRight.vue'
import Fin from '../components/intersection/fin.vue'
import Mix from '../components/intersection/mix.vue'

export default defineComponent({
  components:{
    TargetContents,
    First,
    Second,
    IntersectionLeft,
    IntersectionRight,
    Fin,
    Mix,
  },
  setup() {
    const arrayMessage = () => {
      let message = []
      let mes = "ご視聴ありがとうございました。"
      for (let i = 0; i < mes.length; i++) {
        message.push(mes.charAt(i))
      }
      return message
    }
    const state = reactive ({
      lists:[
        {
          icon:"■",
          h1:"タイトル",
          span:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
        },
        {
          icon:"■",
          h1:"タイトル",
          span:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
        },
        {
          icon:"■",
          h1:"タイトル",
          span:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
        },
      ],
      message:arrayMessage(),
      messageShow: true,
    })

    onMounted(async () => {
      moreObserve()
    })

    const messageRef = ref()

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
    
    const moreObserve = (async() => {
      let options = {
        root: null,
        rootMargin: "2000px 0px -30%",
        threshold: ThresholdList(),
      }
      let messageTargets = document.querySelectorAll('.message')
      let moreObserver:any;
      moreObserver = new IntersectionObserver(moreIntersect, options);
      messageTargets.forEach(target => moreObserver.observe(target));
    });
    const moreIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("message-in")
          state.messageShow = true
        } else {
          entry.target.classList.remove("message-in")
          state.messageShow = false
        }
      });
    }

    const onClickBack = () => {
      window.scroll({top: 0, behavior: 'smooth'});
    }

    return {
      state,
      messageRef,
      arrayMessage,
      onClickBack
    }
  },
})
</script>


<style lang="scss" scoped>
#intersection-home {
  .inter-section-left {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .more {
    height: calc(100vh - 103px);
    border: solid;
    overflow : hidden;
  }

  .message {
    height: 200px;
    margin: 5px;
    display: flex;
    align-items: center;
    font-size: 40px;
    // border: solid;
    opacity: 0;
  }
  .message-box {
    display: flex;
    align-items: center;
  }
  .message-in {
    color: darkviolet;
    opacity: 1;
    animation: imagesTextLeft 2.5s ease-in-out;
  }
  @keyframes imagesTextLeft {
    from{
      transform: translate(0, 30vh);
      opacity: 0.1;
    }
  }
}
#back {
  height: 30px;
  font-size: 20px;
}
</style>