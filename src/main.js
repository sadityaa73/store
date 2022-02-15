import { createApp } from 'vue'
import Header from "./components/Header.vue"
import App from './App.vue'

const app = createApp(App);
app.component('Header', Header)

createApp(App).mount('#app')