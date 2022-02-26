<template>
<div class="con1">
  <section>
    <div class="con"><p>kkkkkk</p></div>
    <p class="dd pointer" @click="onClickuuu">jjuoo</p>

    <div class="lplp" ref="conteiner">this is a</div>
    <div id="box">
      <div class="vertical">
        Welcome to <strong>The Box!</strong>
      </div>
    </div>
    <div class="con"><p>kkkkkk</p></div>
  </section>
  <section>
    <div id="observe" ref="observeElement">
      <div>

      </div>
    </div>
  </section>
</div>
</template>


<script>
import { reactive, ref } from '@vue/reactivity'
// import { Intersect } from "vue-intersect";
import inter from '../comic/Intersectionobserver'
export default {
name: 'Ap',
  setup(){
    const state = reactive({

    });

    const conteiner = ref(null)
    // const observeElement = ref(null)

    const onClickuuu = () => {
      console.log("sss")
      console.log(conteiner)
      console.log("sss2")
      console.log(conteiner.value)
      // console.log(this.conteiner)
    }
    inter()
    return{
      state,
      onClickuuu,
      conteiner,
      // inter,
    }

  },
}
</script>


<style scoped>
.relative{
  position: relative;
}
.con1{
  height: 700px;
}
.con{
  height: 700px;
}
#box {
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition: background-color 1s, border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}

.dd {
  margin: 150px;
}

.lplp{
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition: background-color 1s, border 1s;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 20px;
  margin: 150px; */
}
</style>