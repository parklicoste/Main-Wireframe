<template>
    <div class="col col-lg-8" >
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
            <button type="button" class="btn btn-primary btn-lg mt-3" style="margin-left: 30%;"> Submit</button>
    </div>
</template>