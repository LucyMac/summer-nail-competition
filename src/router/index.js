import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import photouploader from '@/components/photouploader'
import entrygrid from '@/components/entrygrid'
import thumbnail from '@/components/thumbnail'
import upvote from '@/components/upvote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/upload',
      name: 'photouploader',
      component: photouploader
    },
    {
      path: '/grid',
      name: 'grid',
      component: entrygrid
    },
    {
      path: '/thumbnail',
      name: 'thumbnail',
      component: thumbnail
    },
    {
      path: '/upvote',
      name: 'upvote',
      component: upvote
    }
  ]
})
