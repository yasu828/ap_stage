<template>
      <div id="top-body">
    <!-- <AppHeader /> -->
    <section class="images">
      <!-- メモ：後ろの画像はback-groud -->
      <div class="box imageanimationleft">
        <p class="imagestextleft">テキストメッセージ</p>
      </div>
      <div class="box imageanimationcenter">
        <p class="imagestextcenter">
          テキストメッセージ<br>
          テキストメッセージ
        </p>
      </div>
      <div class="box imageanimationright">
        <p class="imagestextright">
          テキストメッセージ<br>
          テキストメッセージ<br>
          テキストメッセージ
        </p>
      </div>
    </section>

    <section class="anchor">
      <span id="apply" class="anchor-text pointer" @click="onClickapplyScroll">
        プロフィール<br>
        ⌵
      </span>
    </section>
    <!-- <transition appear> -->
      <section class="apply" ref="scrollRef">
        <div class="box b-green">
          <h2 class="t-center">
            あなたは<br>
            なぜ<br>
            我が社に？<br>
          </h2>
          <div class="t-center w-100">
            <router-link to="first">
              <span class="t-center">リンク先</span>
            </router-link>
          </div>
        </div>
        <div class="box b-blue">
          <h2 class="t-center">
            あなたは<br>
            どうなりたい？<br>
          </h2>
<!-- <intersection-observer
  sentinal-name="sentinal-name"
  @on-intersection-element="onIntersectionElement"
></intersection-observer> -->
<div
        class="h-24 bg-blue-200 transition-all duration-500 transform"
        :class="{
          'translate-y-0 opacity-100': isIntersectingElement,
          'translate-y-full opacity-0': !isIntersectingElement,
        }"
      >
        Animation
      </div>
          <div class="t-center w-100">
            <router-link to="first">
              <span class="t-center">リンク先</span>
            </router-link>
          </div>
        </div>
      </section>
    <!-- </transition> -->
    <section class="disablity">
      <router-link to="/first">
      <span class="lin">別リンク</span>
      
3
4
      </router-link>
    </section>

    <section class="other">
      <div class="inner">
        <h3>その他グループ</h3>
        <div class="companies">
          <h4>タイトル</h4>
          <div class="toggleArea">
            <p>
              <strong>企業名<br></strong>
              コメント-------------------------
            </p>
            <router-link
            to="second"
            class="sec"
            >
              <span class="blue-btn">企業サイトへ</span>
            </router-link>
          </div>
        </div>
        <div class="companies">
          <h4>タイトル</h4>
          <div class="toggleArea">
            <p>
              <strong>企業名<br></strong>
              コメント-------------------------
            </p>
            <router-link
            to="second"
            class="sec"
            >
              <span class="blue-btn">企業サイトへ</span>
            </router-link>
          </div>
        </div>
        <div class="companies">
          <h4>タイトル</h4>
          <div class="toggleArea">
            <p>
              <strong>企業名<br></strong>
              コメント-------------------------
            </p>
            <router-link
            to="second"
            class="sec"
            >
              <span class="blue-btn">企業サイトへ</span>
            </router-link>
          </div>
        </div>
        <div class="companies">
          <h4>タイトル</h4>
          <div class="toggleArea">
            <p>
              <strong>企業名<br></strong>
              コメント-------------------------
            </p>
            <router-link
            to="second"
            class="sec"
            >
              <span class="blue-btn">企業サイトへ</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer">
        フッター
      </div>
    </footer>
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex'
import homeComic from "../comic/home";


export default defineComponent({
  name: "home",
  components:{
    // AppHeader,
  },
  setup(){
    const state = reactive({
      isFirstTime: true,
      hei: window.scrollY,
    })

    const store = useStore();

    ref(null);

    const { 
      dispMsg
    } = homeComic()

    if(store.state.isFirstTime){
      window.setTimeout(dispMsg, 4000);
      store.state.isFirstTime = false;
      }

    // if(window.scrollY >= 900){
      //   state.hei = scrollY;
    // }


    onMounted(async() => {
      state.hei = window.scrollY;
    });
// onIntersectionElement(value) {
//   // value will be true when the component is visible on the page   
//      otherwise false
//   // you can do whatever you want
// },
    const onClickapplyScroll = () => {
      dispMsg()
    }

  // watch(() => state.hei,(hei, prevCount) => {
  //   state.hei = window.scrollY;
  //   console.log(hei)
  //   console.log(prevCount)
  // })

// directly watching a ref
// const /


    return {
      state,
      onClickapplyScroll,
      dispMsg,
    }
  },
  // data() {
  //   return {
  //     isIntersectingElement: false,
  //   };
  // },
  // methods: {
  //   // onIntersectionElement(value) {
  //   //   this.isIntersectingElement = value;
  //   // },
  // },
})
</script>

<style scoped>
</style>