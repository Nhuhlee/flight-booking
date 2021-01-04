<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <h3>Add Account</h3>
        <form @submit.prevent="handleAdd(formUser)">
          <div class="form-group">
            <label>User Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.fullName"
            />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.email"
            />
          </div>
            <div class="form-group">
            <label>Password:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.password"
            />
          </div>
          <div class="form-group">
            <label>Password Confirm:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.passwordConfirm"
            />
          </div>
          <button type="submit" class="btn btn-success">Insert</button>
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
        password: "",
        passwordConfirm:"",
        fullName: "",
      },
    };
  },

  methods: {
    handleAdd(newValue) {
      this.$store.dispatch("fetchAddUser", newValue);
    },
  },

  computed: {
    loading() {
      return this.$store.state.user.loading;
    },
    userDetail() {
      return this.$store.state.user.data;
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