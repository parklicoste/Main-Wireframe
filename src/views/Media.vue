<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                <th scope="col">ID#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Type</th>
                <th scope="col">Size</th>
                <th scope="col">Duration</th>
                <th scope="col">In-Use</th>
                <th scope="col">Tags</th>
                <th scope="col">Owner</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark Otto</td>
                <td>@mdo</td>
                <td>Game</td>
                <td>70mb</td>
                <td>2min</td>
                <td>(0)</td>
                <td>Tag1<br> Tag2 </td>
                <td>
                    <div class="dropdown">
                        <button type="button" class="btn btn-link">Link</button>
                    <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dLabel">
                        <li><a tabindex="-1" href="#">Action</a></li>
                        <li><a tabindex="-1" href="#">Another action</a></li>
                        <li><a tabindex="-1" href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a tabindex="-1" href="#">Separated link</a></li>
                    </ul>
                    </div>
                    <!--  -->
                
                </td>

                </tr>
            </tbody>
            </table>
    </main>
</template>