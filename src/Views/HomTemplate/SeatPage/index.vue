
<template>
  <div id="seat-page">
    <h2 align="center">this is seat page component - seat booking</h2>
    <div class="row justify-content-center text-center">
      <div class="col-sm-6">
        <h4>seat component</h4>
        <div class="row">
          <template v-for="(seat, index) in data" :key="index">
            <div class="col-sm-3">
              <Seat
                :seat="seat"
                :seatUnselected="seatUnselected"
                @event-book="handleSelectSeat"
              />
            </div>
          </template>
        </div>
      </div>
      <!--  -->
      <div class="col-sm-6 d-flex justify-content-between flex-column">
        <div class="">
          <h4>list seat sellected</h4>
          <div class="d-flex flex-column-reverse">
            <template v-for="(seat, index) in listSelectedSeat" :key="index">
              <p class="m-0">
                seat code: {{ seat.code }}
                <span class="text-danger" @click="handleCancel(seat, index)"
                  >[ Huy ]</span
                >
              </p>
            </template>
          </div>
        </div>

        <button class="btn btn-warning w-50 mx-auto">Booking</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from "./../../../store/seat/constant";
import Seat from "./seat";
export default {
  components: {
    Seat,
  },
  data() {
    return {
      listSelectedSeat: [],
      seatUnselected: null,
    };
  },
  created() {
    this.$store.dispatch(types.A_FETCH_LIST_SEAT);
  },
  methods: {
    handleSelectSeat(obj) {
      this.seatUnselected = null;
      if (obj.seatStatus) {
        this.listSelectedSeat.push(obj.seat);
      } else {
        let index = this.listSelectedSeat.findIndex(
          (item) => item.code === obj.seat.code
        );
        if (index !== -1) {
          this.listSelectedSeat.splice(index, 1);
        }
      }
    },
    handleCancel(seat, index) {
      this.listSelectedSeat.splice(index, 1);
      this.seatUnselected = seat;
    },
  },
  computed: {
    loading() {
      return this.$store.state.seat.loaing;
    },
    data() {
      return this.$store.state.seat.data;
    },
  },
};
</script>

<style>
</style>
