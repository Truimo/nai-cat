import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwindcss.css'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearch,faPlus,faBars,faAngleRight,faCog} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faPlus,faBars,faAngleRight,faCog)

createApp(App)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
