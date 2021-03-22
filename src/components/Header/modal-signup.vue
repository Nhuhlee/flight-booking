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
          <form ref="formSignUp" @submit.prevent="handleSignUp">
            <h2 class="text-info">Sign Up</h2>
            <hr />
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                required="required"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                required="required"
                v-model="password"
              />
            </div>
            <div class="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                class="form-control"
                name="confirm_password"
                required="required"
                v-model="passwordConfirm"
              />
            </div>
            <div class="form-group">
              <label>Full Name</label>
              <input
                type="text"
                class="form-control"
                name="fullName"
                required="required"
                v-model="fullName"
              />
            </div>
            <!-- <div class="form-group">
              <label class="form-check-label">
                <input type="checkbox" required="required" /> I accept the
                <a href="#">Terms of Use</a> &amp;
                <a href="#">Privacy Policy</a>
              </label>
            </div> -->
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
import * as types from "./../../store/auth/constant.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      fullName: "",
    };
  },
  computed: {
    loading() {
      return this.$store.state.auth.loading;
    },
    err() {
      return this.$store.state.auth.err;
    },
  },
  methods: {
    handleSignUp() {
      const user = {
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
        fullName: this.fullName,
      };
      this.$store.dispatch(types.A_AUTH_SignUp, user);
    },
  },
};
</script>

<style>
</style>
