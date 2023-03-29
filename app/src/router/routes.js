import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default [
    {
        path: "/home",
        component: Home,
        meta: {show: true}
    },
    {
        path: "/search/:keyword?",
        component: Search,
        meta: {show: true},
        name: "search"
    },
    {
        path: "/register",
        component: Register,
        meta: {show: false}
    },
    {
        path: "/login",
        component: Login,
        meta: {show: false}
    }
]
