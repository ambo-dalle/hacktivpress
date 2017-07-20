import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Artikel from '@/components/Blogdetail'
import ListArtikel from '@/components/ListArtikel'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Createartikel from '@/components/Createartikel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/create',
      name: 'Createartikel',
      component: Createartikel
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      children: [
        {
          path: '',
          component: ListArtikel
        },
        {
          path: 'artikel/:id',
          name: 'artikel',
          component: Artikel
        }
      ]
    }
  ]
})
