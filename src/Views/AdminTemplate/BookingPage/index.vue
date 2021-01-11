<template>
  <template v-if="loading">
    <Loader />
  </template>
  <div class="container" v-else>
    <br/>
    <div class="row">

     <br/>
      <div class="col-md-12">
         <br/>
        <table class="table">
          <thead>
            <tr>
              <th>No</th>
              <th>From name</th>
              <th>To name</th>
              <th>Time</th>
              <th>Total price</th>
              <th>Detail seat</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(booking, index) in data" :key="booking._id">
              <td>{{ index + 1 }}</td>
              <td>{{ booking.from }}</td>
              <td>{{ booking.to }}</td>
              <td>{{ booking.time }}</td>
              <td>{{ booking.totalPrice }}</td>
              <td><li v-for="seats in booking.seats" :key="seats._id">
                   {{ seats.code }}
                  </li> 
              </td>
            </tr>
      
          </tbody>
        </table>
      </div>
  
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
import * as types from "./../../../store/booking/constant";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      id: "",
      seats:""
    };
  },
  created() {
    this.$store.dispatch(types.A_FETCH_LIST_BOOKING);
  },
  computed: {
    loading() {
      return this.$store.state.booking.loading;
    },
    data() {
      return this.$store.state.booking.data;
    },
  },
};
</script>

<style>
</style>