<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div class="row no-gutters mt-5 pb-4 user-row">
            <h5 >Settings</h5>
        </div>

        <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(link, index) in settingsLinks" :key="index">
                        <router-link class="nav-link" active-class="active" :to="link.path">{{link.text}}</router-link>
                    </li>
                </ul>
            </nav>
            <router-view></router-view>
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

<script>
export default {
    data: () => {
        return {
            settingsLinks: [
                {   text: 'Content',
                    path: '/settings/content',
                },
                {   text: 'General',
                    path: '/settings/general',
                },
                {   text: 'Troubleshooting',
                    path: '/settings/troubleshooting',
                }
            ]
        }
    }
}
</script>