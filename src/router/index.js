import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Rank from '@/views/Rank'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/search',
        name: 'Search',
        component: Search
    }, {
        path: '/rank',
        name: 'Rank',
        component: Rank
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
