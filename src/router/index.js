import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/Main.vue'
import users from '@/users.vue'
import behavior from '@/behavior.vue'
import test from '@/test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: 'users',
      children: [
        {name: 'users', path: 'users', component: users},
        {name: 'behavior', path: 'behavior', component: behavior},
        {name: 'test', path: 'test', component: test}
      ]
    }
  ]
})
