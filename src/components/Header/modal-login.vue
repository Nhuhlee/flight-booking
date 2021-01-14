<template>
  <div
    class="modal fade"
    id="loginModal"
    ref="modalLogin"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content p-4">
        <div class="login-form">
          <form @submit.prevent="handleLogin" ref="formLogin">
            <!-- <div class="avatar">
              <i class="fa fa-user" style="font-size: 60px"></i>
            </div> -->
            <h2 class="modal-title text-primary">Login</h2>
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" ref="name" name="email" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" name="password" />
            </div>
            <div class="form-group small clearfix">
              <label class="form-check-label"
                ><input type="checkbox" /> Remember me</label
              >
              <a href="#" class="forgot-link">Forgot Password?</a>
            </div>
            <button type="submit" class="btn btn-primary btn-block btn-lg">
              Login
            </button>
          </form>
          <div class="text-center small">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>
