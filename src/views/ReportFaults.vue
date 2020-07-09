<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div class="row no-gutters mt-5 pb-4 user-row">
            <h5 >Report Faults</h5>
        </div>

        <div class="col col-lg-8">
                <form>
                    <div class="form-group row">
                        <label for="colFormLabel" class="col-sm-4 col-form-label">Name</label>
                        <div class="col-sm-8">
                        <input type="text"  class="form-control" id="Name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="colFormLabel" class="col-sm-4 col-form-label">Email</label>
                        <div class="col-sm-8">
                        <input type="email" class="form-control" id="inputEmail3">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="colFormLabel" class="col-sm-4 col-form-label">Issue Summary</label>
                        <div class="col-sm-8">
                        <input type="text" class="form-control" id="issueSummary" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="colFormLabel" class="col-sm-4 col-form-label">Expected Result</label>
                        <div class="col-sm-8">
                        <input type="text" class="form-control" id="expectedResult" >
                        </div>
                    </div>
                </form>

                
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Screenshot</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
        </div>
         <button type="button" class="btn btn-primary btn-lg mt-3" style="margin-left: 30%;">Submit</button>
    </main>
</template>

<style scoped>
.btn-link{
    float: right;
    
}
h5 {
    margin-top: 7px;
}
</style>