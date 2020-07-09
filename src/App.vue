<template>
  <div id="app">
    <Login v-bind:loginClick="loginClick" v-show="!loginClick" @loginClick="showDashboard" />

    
    <div class="container-fluid" v-show="loginClick">
        <DashboardTemp />
        <nav-bar  :nav-links="navLinks"  />
        <router-view style="position: relative; margin-top: 80px;"/>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Login from './components/Login.vue'
import DashboardTemp from './components/DashboardTemp.vue'


export default {
  components: {
     Login,
    DashboardTemp,
    // Dashboard
  },
  data: () => ({
    loginClick: false,
    navLinks: [
      { type: "Select Device",
        nav: [{ text: 'Main-Swall',
          path: '/mainSwall',
          icon: "airplay"
          },
        { text: 'Test-Swall',
          path: '/testSwall',
          icon: "airplay"
          }]},
      { type: "Administration",
        nav: [{  text: 'Users',
          path: '/users',
          icon: "user"
          },
        { text: 'User-Groups',
          path: '/userGroups',
          icon: "users"
          },
        { text: 'Settings',
          path: '/settings',
          icon: "settings"
          }]},
      { type: "Advance",
          nav: [{ text: 'Report Faults',
          path: '/reportFaults',
          icon: "alert-triangle"
          },
        { text: 'Session',
          path: '/session',
          icon: "file-text"
          }]}
    ]
    
  }),
  methods: {
    showDashboard: function (value) {
      this.loginClick = value
    }
  }
}
</script>
