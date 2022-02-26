<template>
  <div id="first" ref="Contents">
    <span class="pointer" @click="onClickcolo"> クリック </span>
    <p :class="{p: state.isActive}">いいいいい</p>
    {{state.bin}}
    <div class="b-box" ref="kokoi">
      <p :class="{ls:isActive}">
        変更箇所
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'
import firstIntersectionObserver from "../comic/first_intersection"

export default defineComponent({
  components:{},
  setup() {
    const state = reactive({
      isActive: true,
    })

    const { 
      Contents2,
      firstCallback,
      firstCall,
    } = firstIntersectionObserver()

      firstCall()
    onMounted(() => {
      firstCallback()
      console.log("Contents2")
      console.log(Contents2)
      console.log("Contents2")
      // state.isActive = Contents2
    });

    let Contents = ref()
    Contents = Contents2

    const onClickcolo = () => {
      state.isActive = Contents2.value
      }

    return{
      state,
      Contents,
      onClickcolo,
      firstCallback,
    }
  }
})
</script>

<style lang="scss" scoped>
#first {
  background-color: rgb(255, 215, 0, 0.2);
  height: 1000px;

  .p {
      text-align: center;
      position: absolute;
      top: 45%;
      color: coral;
      font-size: 48px;
      animation: imagesTextLeft 1s;
    }
    @keyframes imagesTextLeft {
      from{
        transform: translate(0, 50px);
        opacity: 0;
      }
      to{
        opacity: 1;
      }
    }
    .ls{
      margin: 120px;
        height: 100px;
        width: 100px;
    }
    .b-box{
      opacity: 0.1;
      background-color: fuchsia;
    }
}
</style>