<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <div class="alert alert-danger" v-if="err">
          {{ err.response.data.message }}
        </div>
        <form @submit.prevent="handleLogin">
          <h2 class="text-success">Sign up successfully !</h2>
          <h3>LOGIN </h3>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" />
          </div>
          <div class="mt-6">
            <button type="submit" class="btn btn-success">Login</button>
          </div>
        </form>
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
    };
  },

  created() {
    if (this.$store.state.auth.token) {
      this.$router.replace("/admin/dashboard");
    }
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
    handleLogin() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch(types.A_AUTH_LOGIN, user);
    },
  },
};
</script>

<style>
</style>
