import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Rank from '@/views/Rank'
import Miss from '@/views/Miss'

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
    }, {
        path: '/:catchAll(.*)',
        name: 'miss',
        component: Miss
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
