<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <h3>Edit Airport</h3>
        <form @submit.prevent="handleUpdate(formAirport)">
          <div class="form-group">
            <label>Airport Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="formAirport.name"
            />
          </div>
          <div class="form-group">
            <label>Code:</label>
            <input
              type="text"
              class="form-control"
              v-model="formAirport.code"
            />
          </div>
          <div class="form-group">
            <label>Country:</label>
            <input
              type="text"
              class="form-control"
              v-model="formAirport.country"
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
      formAirport: {
        name: "",
        code: "",
        country: "",
      },
    };
  },
  created() {
    this.$store.dispatch("fetchDetailAirport", this.$route.params.id);
  },

  methods: {
    handleUpdate(newValue) {
      newValue.id = this.$route.params.id;
      this.$store.dispatch("fetchUpdateAirport", newValue);
      
    },
  },

  computed: {
    loading() {
      return this.$store.state.airport.loading;
    },
    airportDetail() {
      return this.$store.state.airport.data;
    },
  },
  watch: {
    airportDetail(newValue) {
      this.formAirport = newValue;
    },
  },
};
</script>

<style>
</style>