<template>
  <div class="hello" @click="tes">
    {{$store.state.messe}}
  </div>
  <div>
        {{$store.state.counter}}
  </div>
  <div>
        {{arr}}
  </div>
  <span v-for="(a ,i) in $store.getters.arr" :key="i">
    {{a}}
  </span>
</template>

<script>
import { createStore } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    createStore();
  },
  date(){
    return{
      message:"",
      // gaa:
    }
  },
  methods:{
    tes(){
      this.$store.commit('incdes')
    },
    // inp
  },
  computed:{
    arr(){
      return this.$store.getters.arr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
