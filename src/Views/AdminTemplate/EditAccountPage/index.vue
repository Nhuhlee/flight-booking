<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <h3>Update Password Account</h3>
        <div class="alert alert-danger" v-if="err">
          {{ err.response.data.message }}
        </div>
        <form @submit.prevent="handleUpdate(formUser)">
          <div class="form-group">
            <label>Email:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.email"
            />
          </div>
          <div class="form-group">
            <label>Old Password:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.oldPassword"
            />
          </div>
          <div class="form-group">
            <label>Confirm password:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.passwordConfirm"
            />
        </div>
            <div class="form-group">
            <label>New Password:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.newPassword"
            />
          </div>
          <button type="submit" class="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formUser: {
        email: "",
        oldPassword: "",
        newPassword: "",
        passwordConfirm: "",
      },
    };
  },

  methods: {
    handleUpdate(newValue) {
      this.$store.dispatch("fetchUpdateUser", newValue);
    },
  },

  computed: {
    loading() {
      return this.$store.state.user.loading;
    },
    err() {
      return this.$store.state.user.err;
    },
  },
  watch: {
    userDetail(newValue) {
      this.formUser = newValue;
    },
  },
};
</script>

<style>
</style>