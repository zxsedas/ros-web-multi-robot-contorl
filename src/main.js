import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
// import VueSocketIO from 'vue-3-socket.io'



library.add(faAngleLeft, faAngleRight)


// var socket = new VueSocketIO({
//     debug: true,
//     connection: 'ws://127.0.0.1:8000/',
//     vuex: {},
//     options: { path: "/" } //Optional options
// })


createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
