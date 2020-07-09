<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div class="row no-gutters mt-5 pb-4 user-row">
            <h5>Session</h5>
        </div>
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                <th scope="col col-sm-4">Last Accessed</th>
                <th scope="col">Active</th>
                <th scope="col">Username</th>
                <th scope="col">Last Page</th>
                <th scope="col">Ip Address</th>
                <th scope="col">Browser</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>2019-10-02</td>
                <td>x</td>
                <td>admin</td>
                <td>media</td>
                <td>134.117.60.28</td>
                <td>
                    <div class="dropdown">
                        <li><router-link :to="'#'" >chrome</router-link></li>
                    <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dLabel">
                        <li><a tabindex="-1" href="#">Logout</a></li>
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