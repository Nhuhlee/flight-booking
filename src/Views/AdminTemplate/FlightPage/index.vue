<template>
  <template v-if="loading">
    <Loader />
  </template>
  <div class="container" v-else>
     <br/>
    <div class="row">
     <br/>
    <div>
      <router-link
          class="btn btn-success"
          :to="`/admin/flights/add`"
      >Add new flight</router-link>
      <br/>
    </div>
     <br/>
      <div class="col-md-12">
        <br/>
        <table class="table">
          <thead>
            <tr>
            <th>No.</th>
            <th>From code</th>
              <th>From name</th>
              <th>To code</th>
              <th>To name</th>
              <th>Star time</th>
              <th>Price</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(flight, index) in data" :key="flight._id">
              <td>{{ index + 1 }}</td>
              <td>{{ flight.originAirportCode }}</td>
              <td>{{ flight.originAirport }}</td>
              <td>{{ flight.destinationAirportCode }}</td>
              <td>{{ flight.destinationAirport }}</td>
              <td>{{ flight.startTime }}</td>
              <td>{{ flight.price }}</td>
              <td>
                <router-link
                  class="btn btn-info mr-2"
                  :to="`/admin/flights/${flight._id}/edit`"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target="#modelId"
                  @click="id = flight._id"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <DeleteComfirm :id="id" />
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
import * as types from "./../../../store/flight/constant";
import DeleteComfirm from "./../../../components/DeleteConfirmFlight";
export default {
  components: {
    Loader,
    DeleteComfirm,
  },
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.$store.dispatch(types.A_FETCH_LIST_FLIGHT);
  },
  computed: {
    loading() {
      return this.$store.state.flight.loading;
    },
    data() {
      return this.$store.state.flight.data;
    },
  },
};
</script>

<style>
</style>