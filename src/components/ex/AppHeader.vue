<template>
<div id="app-header">
  <header class="header flex">
    <p class="ppo">
      <a href="contents">contents</a>
    </p>
    <p class="ppo">
      <a href="first">first</a>
    </p>
      <span class="pointer" :class="state.kuri" @click="onClickcolor">クリン</span>
      <p>{{ }}</p>
      {{ state.bin }}
    <p class="ppo">
      <router-link
        to="/"
      >
      home
      </router-link>
    </p>
    <p class="ppo">
      <router-link
        to="/ka"
      >
      kakaka
      </router-link>
    </p>
    <p class="ppo">
      <a href="/About">about</a>
    </p>
  </header>
</div>
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  el: '#app-header',
  components: {},
  setup() {
    const state = reactive({
      count: 0,
      kuri:"red",
      bin: window.scrollY,
    });

    return{
      state,
    }
  }
})

</script>

<style lang="scss">
.red{
  background-color: red;
}
.green{
  background-color: green;
}
#app-header{
  height: 100px;
  width: 100%;

  .header{
    justify-content: flex-end;
    align-items: flex-end;
    background: #fff;
    z-index: 2;
    // position: fixed;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid #808080;

  }
}

.scrolltop {
  position: fixed;
    right: 1rem;
    bottom: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    background-color: rgba(123,111,113,.7);
    z-index: 29;
    border-radius: .5rem;
    z-index: var(--z-tooltop);
    transition: .4s;
    // visibility: hidden;

    &:hover {
      background-color: var(--first-color);
    }

    &__icon {
      font-size: 2rem;
      color: var(--first-color-lighten);
    }
  }

  .show-scroll {
    visibility: visible;
    bottom: 1.5rem;}
</style>