import Vue              from 'vue/dist/vue.min.js'
import VueRouter        from 'vue-router'
import App              from '../App.vue'
import Home             from '../components/Home'
import Settings         from '../components/Settings'
import Dashboard        from '../components/Dashboard'
import Map              from '../components/Map'

export const routes = [
    {
        path: "/",
        name: "App",
        component: App,
        redirect: 'home',
        children: [
            {
                path: "home",
                name: "Home",
                component: Home,
                children: [
                    {
                        path: "/home/dashboard",
                        name: "Dashboard",
                        component: Dashboard,
                        children: [
                        ]
                    },
                    {
                        path: "/home/settings",
                        name: "Settings",
                        component: Settings,
                        children: [
                        ]
                    },
                    {
                        path: "/home/map",
                        name: "Map",
                        component: Map,
                        children: [
                        ]
                    },
                ]
            },
        ]
    },  
]
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'is-active',
    routes
})