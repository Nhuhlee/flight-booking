<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <h3>Edit Flight</h3>
        <form @submit.prevent="handleUpdate(formFlight)">
          <div class="form-group">
            <label>From code:</label>
            <input
              type="text"
              class="form-control"
              v-model="formFlight.originAirportCode"
              readonly
            />
          </div>
          <div class="form-group">
            <label>From name :</label>
            <input
              type="text"
              class="form-control"
              v-model="formFlight.originAirport"
              readonly
            />
          </div>
          <div class="form-group">
            <label>To code:</label>
            <input
              type="text"
              class="form-control"
              v-model="formFlight.destinationAirportCode"
              readonly
            />
        </div>
        <div class="form-group">
            <label>To name:</label>
            <input
              type="text"
              class="form-control"
              v-model="formFlight.destinationAirport"
              readonly
            />
        </div>
        <div class="form-group">
            <label>Start time:</label>
            <input
              type="text"
              class="form-control"
              v-model="formFlight.startTime"
            />
        </div>
        <div class="form-group">
            <label>Price:</label>
            <input
              type="text"
              class="form-control"
              v-model="formFlight.price"
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
      formFlight: {
        originAirportCode: "",
        originAirport: "",
        destinationAirportCode: "",
        destinationAirport:"",
        startTime:"",
        price:""
      },
    };
  },
  created() {
    this.$store.dispatch("fetchDetailFlight", this.$route.params.id);
  },

  methods: {
    handleUpdate(newValue) {
      newValue.id = this.$route.params.id;
      this.$store.dispatch("fetchUpdateFlight", newValue);
      
    },
  },

  computed: {
    loading() {
      return this.$store.state.flight.loading;
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