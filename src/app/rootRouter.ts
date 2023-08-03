import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routerList'


const router = createRouter({
    routes,
    history: createWebHistory()
})


export default router