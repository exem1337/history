import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VuePdf from 'vue3-pdfjs'

createApp(App).use(router).use(VuePdf).mount('#app')
