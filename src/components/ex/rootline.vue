<template>
  <div class="observe" style="height:70px; width:100%;" ref="textroot" @click="onClickno">rootBox</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {


    const onClickno = () => {
      console.log("リンク")
    }
    return {
      onClickno
    }
  },
})
</script>


<style lang="scss">
.observe {
  // opacity: 0;
  position: fixed;
  top: 0;
  border: blueviolet solid;
}
</style>