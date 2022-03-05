<template>
  <div id="inter-right">右</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({

    })

    return {
      state,
    }
  },
})
</script>

<style lang="scss">
#inter-right {
  width: 50%;
  max-width: 50%;
  height: 100vh;
  background-color: rgba(192, 168, 168, 0.502);
}
</style>
