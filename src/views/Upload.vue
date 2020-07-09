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
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Game <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Browser</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Idle Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Bird Animation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Background Image</a>
                        </li>
                        </ul>
                    </div>
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
                        <span class="input-group-text">Activity File</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
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
