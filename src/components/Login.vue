<template>
  <div class="container">
      <form class="form-signin" v-show="!loginClick" @submit.prevent="showDashboard()">
        <div class="col-md-8 image">
          <img src="../assets/logo.png">
          <p>this is the space for the image</p>
        </div>

        <div class="col sign-in-box">
            <h1 class="h3 mb-3 font-weight-normal">Log In</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>

              <p class="forgot-password mt-2 mb-4">
                <span><a href="#">Forgot password?</a></span>
              </p>

            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit" :to="{ name: 'Dashboard' }" >Log in</button>

            <p>or</p>

            <button class="btn btn-lg btn-secondary btn-block" type="sign-up">Sign Up</button>
        </div>
      </form>
  </div>

</template>

<script>
export default {
  name: 'Login',
  props: ['loginClick'],
methods: {
  showDashboard: function () {
    this.$emit('loginClick', true)
  }
}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
    }

    @media (max-width: 1199.98px) {
      .bd-placeholder-img-lg {
              font-size: 3.5rem;
      }
    }
    .form-signin {
      width: 100%;
      /* max-width: 330px; */
      padding: 15px;
      margin: auto;
    }
    .form-signin .checkbox {
      font-weight: 400;
    }
    .form-signin .form-control {
      position: relative;
      box-sizing: border-box;
      height: auto;
      padding: 10px;
      font-size: 16px;
    }
    .form-signin .form-control:focus {
      z-index: 2;
    }
    .form-signin input[type="email"] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
     .image {
      width: 70%;
      float: left;
      padding: 15px;
    }
.sign-in-box{
      width: 30%;
      float: left;
      padding: 15px;
      }
</style>
