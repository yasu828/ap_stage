<template>
  <div id="top-body">
    <section class="images">
      <!-- メモ：後ろの画像はback-groud -->
      <div class="images-box imageanimationleft t-center">
        <p class="imagestextleft">webで体験を</p>
      </div>
      <div class="images-box imageanimationcenter">
        <p class="imagestextcenter">
          スクロールで<br>
          動き続ける
        </p>
      </div>
      <div class="images-box imageanimationright">
        <p class="imagestextright">
          intersection<br>
          bserver API<br>
          機能一覧
        </p>
      </div>
    </section>

    <section class="anchor">
      <span id="apply" class="anchor-text pointer" @click="onClickapplyScroll">
        概要<br>
        ⌵
      </span>
    </section>

    <section class="apply flex">
      <div class="apply-box b-green a-center">
        <h2 class="explain t-center">
          体験を届ける<br>
          intersection observer APIに注目<br>
          動き続けるサイト制作<br>
        </h2>
        <p class="explain-title">実装機能</p>
        <ul class="explain-list">
          
          <li>読み上がるメッセージ</li>
          <li>グラデーションカラー</li>
          <li>シュッと浮かび上がる</li>
          <li>フワッと浮かび上がる</li>
          <li>拡大 + 展開</li>
          <li>左右比較</li>
          <li>余韻の残る締めくくり</li>
        </ul>
      </div>
      <div class="apply-box b-blue a-center">
        <h2 class="t-center">
          枠内をスクロールして入る🔽<br>
          10を超えEnterになると入ります。
        </h2>
        <ul class="t-center w-100 enter-area" ref="areaRef">
          <li class="enter-area-list all-center" v-for="(num, i) in 10" :key="i">
            <p>{{ i + 1 }}</p>
          </li>
          <li class="enter-area-switch all-center" ref="enterRef">
            <router-link to="inter">Enter</router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex'
import homeComic from "../comic/home";


export default defineComponent({
  name: "home",
  components:{
  },
  setup(){
    const state = reactive({
      isFirstTime: true,
      hei: window.scrollY,
    })

    const store = useStore();

    const enterRef = ref()
    const areaRef = ref()

    const { 
      dispMsg
    } = homeComic()

    if(store.state.isFirstTime){
      window.setTimeout(dispMsg, 4000);
      store.state.isFirstTime = false;
    }

    onMounted(async() => {
      state.hei = window.scrollY;
      mixObserve()
    });

    const onClickapplyScroll = () => {
      dispMsg()
    }

    const ThresholdList = () => {
      let thresholds = [];
      let numSteps = 0;
      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
      }
      thresholds.push(1);
      return thresholds;
    }

    const mixObserve = (async() => {
      let options = {
        root: areaRef.value,
        rootMargin: "2px 0px",
        threshold: ThresholdList()
      }
      let mixobserver;
      mixobserver = new IntersectionObserver(mixIntersect, options);
      mixobserver.observe(enterRef.value)
    })
    const mixIntersect = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.intersectionRatio > 0.6) {
          entry.target.children[0].click()
        }
      });
    }

    return {
      state,
      onClickapplyScroll,
      dispMsg,
      enterRef,
      areaRef
    }
  },
})
</script>