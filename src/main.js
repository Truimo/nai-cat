import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/css/tailwindcss.css'
import '@/assets/css/transition.css'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearch,faPlus,faBars,faAngleRight,faAngleLeft,faCog,faRedoAlt,faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import '@/assets/css/style.css'

library.add(faSearch, faPlus,faBars,faAngleRight,faAngleLeft,faCog,faRedoAlt,faTimesCircle)

createApp(App)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
