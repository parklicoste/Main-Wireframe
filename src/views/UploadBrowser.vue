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
                            <router-link class="nav-link" :to="link.path">{{link.text}}</router-link>
                        </li>
                    </ul>
                </nav>
        </div>
        <div class="col col-lg-8">
            <h5 class="row mt-3 mb-3">New Activity</h5>
                <form>
                    <div class="form-group row">
                        <label for="Name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                        <input type="text"  class="form-control" id="Name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="description" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="description" >
                        </div>
                    </div>
                </form>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Logo</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Activity File (exe)</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>

                <div class="form-group row">
                        <label for="url" class="col-sm-2 col-form-label">URL</label>
                        <div class="col-sm-10">
                        <input type="text"  class="form-control" id="url">
                        </div>
                </div>

                <div class="form-check form-check-inline">
                    <h6> Tags </h6>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1">Checkbox Tags</label>
                </div>
                <div class="form-check form-check-inline">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            <label class="form-check-label" for="inlineCheckbox1">
                                Tag 1
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            <label class="form-check-label" for="inlineCheckbox1">
                                Tag 2
                            </label>
                        </div>
                        <div class="form-check ">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            <label class="form-check-label" for="inlineCheckbox1">
                                Tag 3
                            </label>
                        </div>
                        <div class="form-check ">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            <label class="form-check-label" for="inlineCheckbox1">
                                Tag 4
                            </label>
                        </div>

                    </div>
                    
                </div>
                
        </div>
        <button type="button" class="btn btn-primary btn-lg mt-3" style="margin-left: 30%;">Submit</button>
           
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
              path: '/upload/media'
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