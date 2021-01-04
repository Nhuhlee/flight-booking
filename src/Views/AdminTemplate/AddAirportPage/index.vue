<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <h3>Add new Airport</h3>
        <form @submit.prevent="handleAdd(formAirport)">
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
      formAirport: {
        name: "",
        code: "",
        country: "",
      },
    };
  },
  

  methods: {
    handleAdd(newValue) {
      this.$store.dispatch("fetchAddAirport", newValue);
      
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