<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div class="row no-gutters mt-5 pb-4 user-row">
            <div class="col-12 col-sm-6 col-md-8"><h5 >User - Groups</h5></div>
            <div class="col-6 col-md-4">
                <button type="button" class="btn btn-link">Filter</button>
                <button type="button" class="btn btn-link">Add User Groups </button>
            </div>
        </div>
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                <th scope="col">User group Name</th>
                <th scope="col">Permission</th>
                <th scope="col">status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark Otto</td>
                <td>@mdo</td>
                <td>
                    <div class="dropdown">
                        <li><router-link :to="'#'" >active</router-link></li>
                    <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dLabel">
                        <li><a tabindex="-1" href="#">Action</a></li>
                        <li><a tabindex="-1" href="#">Another action</a></li>
                        <li><a tabindex="-1" href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a tabindex="-1" href="#">Separated link</a></li>
                    </ul>
                    </div>
                
                </td>

                </tr>
            </tbody>
            </table>
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