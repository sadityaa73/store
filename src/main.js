import { createApp } from 'vue'
import Header from "./components/Header.vue"
import moreExtn from "./components/HeaderComp/moreExtn.vue"
import App from './App.vue'

const app = createApp(App);
app.component('Header', Header)
app.component('moreExtn', moreExtn)

createApp(App).mount('#app')