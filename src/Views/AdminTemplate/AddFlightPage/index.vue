<template>
  <template v-if="loading">
    <Loader />
  </template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <h3>Add Flight</h3>
        <div class="alert alert-danger" v-if="err">
          {{ err.response.data }}
        </div>
        <form @submit.prevent="handleAdd(formFlight)">
          <div class="form-group">
            <label>From Flight Name:</label>
            <br>
            <select class="form-control"
              v-model="formFlight.originAirportId">
              <option v-for="airport in data1" :key="airport._id"  v-bind:value="airport._id" >
                  {{airport.name}}
              </option>
          </select>
          </div>
          <div class="form-group">
             <label>To Flight Name:</label>
            <br>
            <select class="form-control"
              v-model="formFlight.destinationAirportId">
              <option v-for="airport in data1" :key="airport._id"  v-bind:value="airport._id" >
                  {{airport.name}}
              </option>
          </select>
          </div>
            <div class="form-group">
            <label>Start Time:</label>
            <input
              type="datetime-local"
              class="form-control"
              v-model="formFlight.startTime"
            />
          </div>
          <div class="form-group">
            <label>Price:</label>
            <input
              type="number"
              class="form-control"
              v-model="formFlight.price"
            />
          </div>
          <button type="submit" class="btn btn-success">Insert</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
import * as types from "./../../../store/airport/constant";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      formFlight: {
        originAirportId: "",
        destinationAirportId: "",
        startTime: "",
        price:""
      },
    };
  },
   created() {
    this.$store.dispatch(types.A_FETCH_LIST_AIRPORT);
  },
  methods: {
    handleAdd(newValue) {
      this.$store.dispatch("fetchAddFlight", newValue);
    },
  },

  computed: {
    loading() {
      return this.$store.state.flight.loading;
    },
    loading1() {
      return this.$store.state.airport.loading;
    },
    data1() {
      return this.$store.state.airport.data;
    },
    data() {
      return this.$store.state.flight.data;
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