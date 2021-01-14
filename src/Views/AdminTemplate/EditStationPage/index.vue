<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <h3>Edit Station</h3>
        <form @submit.prevent="handleUpdate(formStation)">
          <div class="form-group">
            <label>Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="formStation.name"
            />
          </div>
          <div class="form-group">
            <label>Address:</label>
            <input
              type="text"
              class="form-control"
              v-model="formStation.address"
            />
          </div>
          <div class="form-group">
            <label>Province:</label>
            <input
              type="text"
              class="form-control"
              v-model="formStation.province"
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
      formStation: {
        name: "",
        address: "",
        province: "",
      },
    };
  },
  created() {
    this.$store.dispatch("fetchDetailStation", this.$route.params.id);
  },

  methods: {
    handleUpdate(newValue) {
      newValue.id = this.$route.params.id;
      this.$store.dispatch("fetchUpdateStation", newValue);
    },
  },

  computed: {
    loading() {
      return this.$store.state.station.loading;
    },
    stationDetail() {
      return this.$store.state.station.data;
    },
  },
  watch: {
    stationDetail(newValue) {
      this.formStation = newValue;
    },
  },
};
</script>

<style>
</style>