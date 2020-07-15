<template>
    <div class="col col-md-auto align-items-center general" >
        <form>
                    <div class="form-group row">
                        <label for="Location" class="col-sm-6 col-form-label">Location of Manual</label>
                        <div class="col-sm-6">
                        <input type="text"  class="form-control" id="Location">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="file" class="col-sm-6 col-form-label">File Download Mode</label>
                        <div class="col-sm-6">
                        <input type="text" class="form-control" id="file" >
                        </div>
                    </div>
                </form>
        <h6> Other general rules</h6>
    </div>
</template>

<style scoped>
h6 {
    padding-top: 20px;
    text-align: center;
}
.general {
    margin: 20px 0 0 20px; 
    padding: 20px 20px 20px 20px;
    border: 1px solid #000;
}
</style>