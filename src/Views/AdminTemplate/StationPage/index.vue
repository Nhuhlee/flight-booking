<template>
  <template v-if="loading">
    <Loader />
  </template>
  <div class="container" v-else>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Station Name</th>
              <th>Province</th>
               <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(station, index) in data" :key="station._id">
              <td>{{ index + 1 }}</td>
              <td>{{ station.name }}</td>
              <td>{{ station.province }}</td>
              <td>
                <router-link
                  class="btn btn-info mr-2"
                  :to="`/admin/stations/${station._id}/edit`"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target="#modelId"
                  @click="id = station._id"
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
import * as types from "./../../../store/station/constant";
import DeleteComfirm from "./../../../components/DeleteComfirm";
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
    this.$store.dispatch(types.A_FETCH_LIST_STATION);
  },
  computed: {
    loading() {
      return this.$store.state.station.loading;
    },
    data() {
      return this.$store.state.station.data;
    },
  },
};
</script>

<style>
</style>