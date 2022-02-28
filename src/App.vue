<template>
<div id="to">
  <AppHeader />
  <router-view></router-view>
</div>
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue'
import AppHeader from "./components/ex/AppHeader.vue"

export default defineComponent({
  el: '#top-body',
  // type inference enabled
  components: {
    AppHeader,
  },
  setup(){
    const state = reactive({
      count: 0
    });

    return{
      state,
    }
  }
})

</script>

<style lang="scss">
@import './sass/app.scss';
@import './sass/default.scss';
@import './sass/reset.scss';

#to {
  display: flex;
  flex-direction: column;
}

</style>