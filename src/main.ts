import { createApp } from 'vue'
import App from './App.vue'
import AppHeader from './components/ex/AppHeader.vue'
import store from './store'
import router from './router'


const app = createApp(App, {
  components: {
    AppHeader,
  },
})
app.use(router).use(store).mount('#app');