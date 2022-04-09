import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Playback from '../components/Playback.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Playback',
      component: Playback
    }
  ]
})
