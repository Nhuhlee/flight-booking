t stat<template>
  <button
    class="btn seat"
    :class="{ seatSelect: seatStatus, seatBooked: seat.isBooked }"
    :disabled="seat.isBooked"
    @click="handleSelectSeat"
  >
    {{ seat.code }}
  </button>
</template>

<script>
export default {
  props: ["seat", "seatUnselected"],
  data() {
    return {
      seatStatus: false,
    };
  },
  methods: {
    handleSelectSeat() {
      this.seatStatus = !this.seatStatus;

      const obj = {
        seatStatus: this.seatStatus,
        seat: this.seat,
      };
      this.$emit("event-book", obj);
    },
  },
  watch: {
    seatUnselected() {
      if (this.seatUnselected) {
        if (this.seatUnselected.code === this.seat.code) {
          this.seatStatus = false;
        }
      }
    },
  },
};
</script>

<style>
.seat {
  background-color: gray;
  color: white;
  margin-bottom: 15px;
}
.seatSelect {
  background-color: green;
}

.seatBooked {
  background-color: red;
  cursor: no-drop;
}
</style>
