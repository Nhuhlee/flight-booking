<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <h3>Edit Account</h3>
        <form @submit.prevent="handleUpdate(formUser)">
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
            <label>User Type:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.userType"
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
        userType: "",
        email: "",
        password: "",
        fullName: "",
      },
    };
  },
  created() {
    this.$store.dispatch("fetchDetailUser", this.$route.params.id);
  },

  methods: {
    handleUpdate(newValue) {
      newValue.id = this.$route.params.id;
      this.$store.dispatch("fetchUpdateUser", newValue);
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