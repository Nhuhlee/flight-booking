<template>
  <div
    class="modal fade"
    id="sign-up"
    tabindex="-1"
    role="dialog"
    aria-labelledby="sign-up"
    aria-hidden="true"
    ref="modalSignUp"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content p-4">
        <div class="signup-form">
          <form ref="formSignUp">
            <h2 class="text-info">Sign Up</h2>
            <hr />
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                required="required"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                required="required"
              />
            </div>
            <div class="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                class="form-control"
                name="confirm_password"
                required="required"
              />
            </div>
            <div class="form-group">
              <label>Full Name</label>
              <input
                type="text"
                class="form-control"
                name="fullName"
                required="required"
              />
            </div>
            <div class="form-group">
              <label class="form-check-label">
                <input type="checkbox" required="required" /> I accept the
                <a href="#">Terms of Use</a> &amp;
                <a href="#">Privacy Policy</a>
              </label>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-lg w-100">
                Sign Up
              </button>
            </div>
          </form>
          <div class="hint-text">
            Already have an account?
            <a href="#">Login here</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
