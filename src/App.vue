<template>
<div id="to">
  <router-view></router-view>
</div>
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  el: '#top-body',
  components: {
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