<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <h3>Add Flight</h3>
        
        <form @submit.prevent="handleAdd(formFlight)">
          <div class="form-group">
            <label>Flight Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="formFlight.fullName"
            />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input
              type="text"
              class="form-control"
              v-model="formFlight.email"
            />
          </div>
            <div class="form-group">
            <label>Password:</label>
            <input
              type="text"
              class="form-control"
              v-model="formFlight.password"
            />
          </div>
          <div class="form-group">
            <label>Password Confirm:</label>
            <input
              type="text"
              class="form-control"
              v-model="formFlight.passwordConfirm"
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
      formFlight: {
        email: "",
        password: "",
        passwordConfirm:"",
        fullName: "",
      },
    };
  },

  methods: {
    handleAdd(newValue) {
      this.$store.dispatch("fetchAddflight", newValue);
    },
  },

  computed: {
    loading() {
      return this.$store.state.flight.loading;
    },
    err() {
      return this.$store.state.flight.err;
    },
    flightDetail() {
      return this.$store.state.flight.data;
    },
  },
  watch: {
    flightDetail(newValue) {
      this.formFlight = newValue;
    },
  },
};
</script>

<style>
</style>