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
            体験を届ける<br>
            今回はスクロール<br>
            intersection observer APIに注目した<br>
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
      <div
        class="h-24 bg-blue-200 transition-all duration-500 transform"
        :class="{
          'translate-y-0 opacity-100': isIntersectingElement,
          'translate-y-full opacity-0': !isIntersectingElement,
        }"
      >
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
      34
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

    onMounted(async() => {
      state.hei = window.scrollY;
    });

    const onClickapplyScroll = () => {
      dispMsg()
    }

    return {
      state,
      onClickapplyScroll,
      dispMsg,
    }
  },
})
</script>

<style scoped>
</style>