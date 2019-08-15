import Home from './components/Home'
import VueRouter from 'vue-router';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '*', component: Home }
]

const router = new VueRouter({
    routes
})

export default router