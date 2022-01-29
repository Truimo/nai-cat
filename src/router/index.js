import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Rank from '@/views/Rank'
import Miss from '@/views/Miss'
import Ranking from '@/views/Ranking'
import Post from '@/views/Post'
import User from '@/views/User'

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
        path: '/ranking',
        name: 'Ranking',
        component: Ranking
    }, {
        path: '/post/:id',
        name: 'Post',
        component: Post
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
