<template>
<div>
  <TargetContents />
  <p style="height:80px; font-size: 48px; padding-top:10px;" class="t-center">(opacity/transform)</p>
  <First />
  <p style="height:80px; font-size: 48px; padding-top:10px;" class="t-center">(ture/false)</p>
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

  <interbal class="hei"></interbal>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import TargetContents from './TargetContents.vue'
import First from './first.vue'
import IntersectionLeft from '../components/intersection/intersectionLeft.vue'
import IntersectionRight from '../components/intersection/intersectionRight.vue'

export default defineComponent({
  components:{
    TargetContents,
    First,
    IntersectionLeft,
    IntersectionRight,
  },
  setup() {
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
      ]
    })

    return {
      state,
    }
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
.inter-section-left {
  width: 50%;
  display: flex;
  flex-direction: column;
}
</style>