
<template>
  
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
                        <span class="input-group-text">* Size 1</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                    
                    <h6>*Note: Resolution : 3840 ** 2160</h6>
                    <!-- <span class="h6">*Note: Resolution : 3840 ** 2160</span> -->
                    
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">* Size 2</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                    <h6>*Note: Resolution : 3840 ** 4320</h6>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">* Size 3</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                    <h6>*Note: Resolution : 3840 ** 6480</h6>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">* Size 4</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                    <h6>*Note: Resolution : 3840 ** 8640</h6>
                </div>

                <button type="button" class="btn btn-primary btn-lg mt-3" style="margin-left: 30%;">Submit</button>
        </div>
        
</template>
