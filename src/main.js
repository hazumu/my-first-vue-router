const Vue = require('vue')
const VueRouter = require('vue-router')
Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

router.map({
  '/': {
    component: require('./pages/home.vue')
  },
  '/home': {
    component: require('./pages/home.vue')
  },
  '/foo': {
    component: require('./pages/foo.vue')
  },
  '/bar/:id': {
    component: require('./pages/bar.vue')
  }
})

const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')
