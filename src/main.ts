import { createApp } from 'vue'
import App from './App.vue'
import Overlay from './wxcomponents/@vant/dist/overlay'
import Loading from './wxcomponents/@vant/dist/loading'

const app = createApp(App)
app.component('van-overlay', Overlay)
app.component('van-loading', Loading)

// @ts-ignore
app.mount('#app')
