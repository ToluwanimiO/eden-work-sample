import Vue from 'vue'
import VueRouter from 'vue-router'
import DogInfo from '../components/DogInfo.vue'
import Home from '../components/Home.vue'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 {
    path: '/dog-info',
    name: 'DogInfo',
    component: DogInfo
  },
 
]

const router = new VueRouter({
  mode: "history", 
  routes,
  scrollBehavior() {
        return {x: 0, y: 0}
    }
})
// router.beforeEach((to,from,next)=>{
//   // console.log(`Going to ${to} from ${from}`)
//   console.log(to)
//   console.log(from)
//   next()
//   // next(false) restrict router from going to another page.
//   // next can also be used to redirect
// })

export default router
