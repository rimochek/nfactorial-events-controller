import { createRouter, createWebHashHistory } from "vue-router"
import { supabase } from "@/supabase"
import MainPage from "@/pages/MainPage.vue"
import SignUpPage from "@/pages/SignUpPage.vue"
import SignInPage from "@/pages/SignInPage.vue"
import ProfilePage from "@/pages/ProfilePage.vue"

let localUser

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpPage,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignInPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

async function getUser(next) {
  localUser = await supabase.auth.getSession()
  console.log(localUser.data.session)
  if (localUser.data.session == null) {
    next("/signup")
  } else {
    next()
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next)
  } else {
    next()
  }
})

export default router
