import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NavBar from '@/components/Navbar.vue';
Vue.component('nav-bar', NavBar);

Vue.use(VueRouter)
// const content = {
//   template: `<div class="col col-sm-8 align-items-center" style="border: 1px solid #000;">
//             <p>setting up the default settings for uploading Idle media and other general rules that can be changes from here </p>
//           </div>`
// }

  const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Dashboard.vue')
  },
  {
    path: '/mainSwall',
    name: 'Main-Swall',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/MainSwall.vue')
  },
  {
    path: '/testSwall',
    name: 'Test-Swall',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/TestSwall.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Upload.vue'),
    children: [
      {   path: '',
          name: 'Upload-Home',
        component: () => import( '../views/Upload/Game.vue')
      },
      {   path: 'game',
          name: 'Game',
        component: () => import( '../views/Upload/Game.vue')
      },
      {   path: 'u-media',
          name: 'Upload-Media',
        component: () => import( '../views/Upload/Media.vue')
      },
      {   path: 'browser',
          name: 'Browser',
        component: () => import( '../views/Upload/Browser.vue')
      },
      {   path: 'idleMedia',
          name: 'Idle-Media',
        component: () => import( '../views/Upload/IdleMedia.vue')
      },
      {   path: 'birdAnimation',
          name: 'Bird-Animation',
        component: () => import( '../views/Upload/BirdAnimation.vue')
      },
      {   path: 'backgroundImage',
          name: 'Background-Image',
        component: () => import( '../views/Upload/BackgroundImage.vue')
      }

    ]
  },
  {
    path: '/media',
    name: 'Media',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Media.vue')
  },
  {
    path: '/users',
    name: 'Users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Users.vue')
   },
  {
    path: '/userGroups',
    name: 'User-Groups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/UserGroups.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Settings.vue'),
    children: [
      {
        path: '',
        // name: 'Settings-Home',
        component: () => import( '../views/Settings/Content.vue')
      },
      {
        path: 'content',
        name: 'Content',
        component: () => import( '../views/Settings/Content.vue')
      },
      {
        path: 'general',
        name: 'General',
        component: () => import( '../views/Settings/General.vue')
      },
      {
        path: 'troubleshooting',
        name: 'Troubleshooting',
        component: () => import( '../views/Settings/Troubleshooting.vue')
      }
    ]
  },
  {
    path: '/reportFaults',
    name: 'Report-Faults',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/ReportFaults.vue')
  },
  {
    path: '/session',
    name: 'Session',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Session.vue')
  },
  // {
  //   path: '/upload/game',
  //   name: 'Game',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( '../views/Upload.vue')
  //  },
  // {
  //   path: '/upload/media',
  //   name: 'Upload-Media',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( '../views/UploadMedia.vue')
  // },
  // {
  //   path: '/upload/browser',
  //   name: 'Browser',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( '../views/UploadBrowser.vue')
  // },
  // {
  //   path: '/upload/idleMedia',
  //   name: 'Idle-Media',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( '../views/UploadIdleMedia.vue')
  // },
  // {
  //   path: '/upload/birdAnimation',
  //   name: 'Bird-Animation',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( '../views/UploadBirdAnimation.vue')
  // },
  // {
  //   path: '/upload/backgroundImage',
  //   name: 'Backgroung-Image',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( '../views/UploadBackgroundImage.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
