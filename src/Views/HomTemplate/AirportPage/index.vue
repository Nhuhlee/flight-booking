<template>
  <template v-if="loading">
    <Loader />
  </template>

  <!--
              <tr v-for="(airport, index) in data" :key="airport._id">
            <td>{{ index + 1 }}</td>
            <td>{{ airport.name }}</td>
            <td>{{ airport.code }}</td>
            <td>{{ airport.country }}</td></tr>
-->

  <div class="container">
    <h2>Air Ports</h2>

    <div class="row">
      <!--  -->
      <router-link
        class="col-md-3 airport__item"
        v-for="airport in data"
        :key="airport._id"
        :to="`/airports/${airport._id}`"
      >
        <div class="card">
          <img
            src="./../../../assets/DaNangAriport.jpg"
            class="card-img-top"
            alt="airport"
          />
          <div class="card-body">
            <h5 class="card-text">{{ airport.name }}</h5>
            <p class="card-text">{{ airport.country }}</p>
          </div>
        </div>
      </router-link>
      <!--  -->
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
import * as types from "./../../../store/airport/constant";
// import DeleteComfirm from "./../../../components/DeleteComfirm";
export default {
  components: {
    Loader,
    // DeleteComfirm,
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
.airport__item {
  padding: 1rem;
}
</style>
