<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="sidebar-sticky pt-3">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="'/dashboard'">
                        <span data-feather="home"></span>
                        Dashboard <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                  <ul class="nav flex-column" v-for="(x, i) in navLinks" :key="i">
                    <h5 class="navbar-nav px-3 mt-3">{{x.type}}</h5>
                    <li class="nav-item" 
                    v-for="(link, index) in x.nav" :key="index" >
                      <router-link class="nav-link" :to="link.path" >
                        <span :data-feather="link.icon"></span>
                          {{link.text}}
                      </router-link>
                    </li>
                  </ul>
                  <!-- <h5 class="navbar-nav px-3 mt-3">Select device</h5>
                  <li class="nav-item" 
                    v-for="(link, index) in nav" :key="index" >
                      <router-link class="nav-link" :to="link.path" >
                        <span :data-feather="link.icon"></span>
                          {{link.text}}
                      </router-link>
                  </li> -->
                  <li class="nav-item">
                      <router-link class="nav-link" :to="'/upload'">
                      Upload Content
                      </router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="'/media'">
                      Media
                      </router-link>
                  </li>

                  <!-- <h5 class="navbar-nav px-3 mb-2">Administration</h5>
                  <li class="nav-item" administratorArray=navLinks.slice(devices.length, devices.length + administrators.length)
                    v-for="(links, counter) in administratorArray" :key="counter" >
                      <router-link class="nav-link" :to="links.path" >
                        <span :data-feather="links.icon"></span>
                          {{links.text}}
                      </router-link>
                  </li> -->

                  <!-- <li class="nav-item">
                      <a class="nav-link" href="#">
                      <span data-feather="user"></span>
                      users
                      </a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="#">
                      <span data-feather="users"></span>
                      users-Group
                      </a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="#">
                      <span data-feather="settings"></span>
                      Settings
                      </a>
                  </li> -->

                  <!-- <h5 class="navbar-nav px-3 mb-2">Advance</h5>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="alert-triangle"></span>
                        Report Faults
                    </a>
                </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Session
                </a>
              </li> -->
            </ul>
        </div>
    </nav>
</template>


<style scoped>
.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
   position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 50px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: fixed;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
</style>

<script>
import feather from 'feather-icons'

  export default {
      name: 'nav-bar',
      props: ['nav-links'],
      mounted () {
      feather.replace()
      },
      components: {
      },
      data () {
          return {
            devices: ['main', 'test'],
            administrators: ['users', 'users-groups', 'settings'],
            devicesArray: [],
            administratorArray: []
          }
      },
      method: {
      }
  }
</script>
