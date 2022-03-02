<template>
<div>
  <TargetContents />
  <article class="flex">
    <IntersectionLeft />
    <IntersectionRight /> 
  </article>
  <interbal class="hei"></interbal>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TargetContents from './TargetContents.vue'
import IntersectionLeft from '../components/intersection/intersectionLeft.vue'
import IntersectionRight from '../components/intersection/intersectionRight.vue'

export default defineComponent({
  components:{
    TargetContents,
    IntersectionLeft,
    IntersectionRight,
  },
  setup() {
    
  },
})
</script>


<style lang="scss" scoped>
.hei {
  height: 100vh;
  display: block;
}
#talk {
  padding: 25px;
  h1 {
    font-size: 26px;
  }
}
</style>