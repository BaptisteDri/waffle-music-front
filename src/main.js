import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import Home from './components/pages/Home.vue'
import Biography from './components/pages/Biography.vue'
import News from './components/pages/News.vue'
import Store from './components/pages/Store.vue'
import Contact from './components/pages/Contact.vue'

Vue.use(VueRouter)

const router = new VueRouter ({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/biography', component: Biography },
    { path: '/news', component: News },
    { path: '/store', component: Store },
    { path: '/contact', component: Contact }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
