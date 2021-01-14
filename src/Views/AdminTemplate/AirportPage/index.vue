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
          :to="`/admin/airports/add`"
      >Add new Aiport</router-link>
      <br/>
    </div>
     <br/>
      <div class="col-md-12">
        <br/>
        <table class="table">
          <thead>
            <tr>
              <th>Airport.No</th>
              <th>Airport Name</th>
              <th>Code</th>
              <th>Country</th>

              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(airport, index) in data" :key="airport._id">
              <td>{{ index + 1 }}</td>
              <td>{{ airport.name }}</td>
              <td>{{ airport.code }}</td>
              <td>{{ airport.country }}</td>
              <td>
                <router-link
                  class="btn btn-info mr-2"
                  :to="`/admin/airports/${airport._id}/edit`"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target="#modelId"
                  @click="id = airport._id"
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
import * as types from "./../../../store/airport/constant";
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
    this.$store.dispatch(types.A_FETCH_LIST_AIRPORT);
  },
  computed: {
    loading() {
      return this.$store.state.airport.loading;
    },
    data() {
      return this.$store.state.airport.data;
    },
  },
};
</script>

<style>
</style>