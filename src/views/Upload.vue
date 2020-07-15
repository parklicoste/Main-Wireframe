<style>
  [v-cloak] {
    display: none;
  }
</style>

<template>
   <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 main" >
       <div class="row mt-3 pb-3">
            <h1 class="h2"> Upload Content</h1>
        </div>
        
        <div class="row align-items-center">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(link, index) in uploadLinks" :key="index">
                            <router-link class="nav-link" active-class="active" :to="link.path">{{link.text}}</router-link>
                        </li>
                    </ul>
                </nav>
        </div>
        <router-view></router-view>
    </main>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-left: 50px;
  vertical-align: middle;
}

</style>

<script>
export default {
    data: () => {
        return {
        uploadLinks: [
              { text: 'Game',
                path: '/upload/game'
            },
            { text: 'Media',
              path: '/upload/u-media'
              },
            { text: 'Browser',
              path: '/upload/browser'
              },
            { text: 'Idle Media',
              path: '/upload/idleMedia'
              },
            { text: 'Bird Animation',
              path: '/upload/birdAnimation'
              },
            { text: 'Background Image',
              path: '/upload/backgroundImage'
              }
            ]
        }
    }
}
</script>