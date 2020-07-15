<template>
        <div class="col col-lg-8">
            <h5 class="row mt-3 mb-3">Background Image</h5>
                <form>
                    <div class="form-group row">
                        <label for="file-name" class="col-sm-4 col-form-label">Current File*</label>
                        <div class="col-sm-6">
                        <input type="text"  class="form-control" id="file-name" placeholder="sample.jpeg">
                        </div>
                    </div>
                </form>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">New File</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                <button type="button" class="btn btn-primary btn-lg mt-3" style="margin-left: 30%;">Submit</button>
        </div>
</template>