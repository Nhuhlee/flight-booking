<template>
  <section class="myCarousel">
    section
    <img src="https://images5.alphacoders.com/863/863248.jpg" alt />
    <div class="myCarousel-banner">
      <div class="myCarousel-banner__content w-100">
        <h2
          style="
            text-transform: uppercase;
            color: rgb(255, 197, 0);
            text-shadow: 0 0 5px white;
          "
        >
          Hệ thống đặt vé máy bay
        </h2>
        <div class="myCarousel-banner__search">
          <div class="row mx-0">
            <div class="col-sm-5 row-flex justify-content-between">
              <div class="d-flex justify-content-between align-items-center">
                <i class="fa fa-map-marker-alt mr-3"></i>
                <!-- <input type="text" placeholder="Ho Chi Minh" /> -->
                <!--  -->
                <select
                  class="custom-select shadow-none border-0"
                  v-model="searchValues.from"
                >
                  <option selected>Open this select menu</option>
                  <option
                    v-for="airport in data"
                    :key="airport.code"
                    :value="airport._id"
                  >
                    {{ airport.name }}
                  </option>
                </select>
              </div>
              <!--  -->
              <div class="d-flex align-items-center justify-content-center">
                <div class="myCarousel-banner__divide"></div>
                <i
                  class="fa fa-exchange-alt"
                  style="
                    font-size: 25px;
                    border: 1px solid #007aff;
                    padding: 5px;
                    border-radius: 50%;
                    background: white;
                    z-index: 10;
                    margin-left: 2px;
                  "
                ></i>
              </div>
            </div>

            <div class="col-sm-5 row-flex justify-content-between">
              <div class="d-flex justify-content-between align-items-center">
                <i class="fa fa-map-marker-alt mr-3"></i>
                <!-- <input type="text" placeholder="Ho Chi Minh" /> -->
                <!--  -->
                <select
                  class="custom-select shadow-none border-0"
                  v-model="searchValues.to"
                >
                  <option selected>Open this select menu</option>
                  <option
                    v-for="airport in data"
                    :key="airport.code"
                    :value="airport._id"
                  >
                    {{ airport.name }}
                  </option>
                </select>
              </div>
              <!--  -->

              <!-- <div class="myCarousel-banner__divide"></div> -->
            </div>

            <!-- <div class="col-sm-2 row-flex">
              <i class="fa fa-calendar-alt mr-3"></i>
              <input type="text" id="datepicker" />
            </div> -->
            <div
              class="col-sm-2 btn-search row-flex rounded-right justify-content-center"
              style="padding: 0"
            >
              <button
                type="button"
                class="btn btn-warning text-white"
                style="border: none; height: 100%; padding: 0; width: 100%"
                @click="handleSearch(searchValues)"
              >
                SEARCH TICKET
              </button>
            </div>
          </div>
        </div>
        <div class="btn btn-success" @click="checkFlightsFound">
          Check FlightFound
        </div>
        <div>
          <table class="table bg-white">
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
              <tr v-for="(flight, index) in flightsFound" :key="flight._id">
                <td>{{ index + 1 }}</td>
                <td>{{ flight.originAirportCode }}</td>
                <td>{{ flight.originAirport }}</td>
                <td>{{ flight.destinationAirportCode }}</td>
                <td>{{ flight.destinationAirport }}</td>
                <td>{{ flight.startTime }}</td>
                <td>{{ flight.price }}</td>
                <td>
                  <router-link
                    class="btn btn-success"
                    :to="`/seat/${flight._id}`"
                    >Choose</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as types from "./../../store/airport/constant";
export default {
  data() {
    return {
      id: "",
      searchValues: {
        from: "",
        to: "",
      },
    };
  },
  created() {
    this.$store.dispatch(types.A_FETCH_LIST_AIRPORT);
  },
  computed: {
    data() {
      return this.$store.state.airport.data;
    },
    flightsFound() {
      return this.$store.state.flight.data;
    },
  },
  methods: {
    checkFlightsFound() {
      console.log(this.flightsFound);
      console.log("store flights found: ", this.$store.state.flight.data);
    },
    handleSearch(search_values) {
      console.log(search_values);
      this.$store.dispatch("fetchFlightsByIds", search_values);
      // console.log(this.flightsFound);
      // console.log(this.$store.state.flight)
      // this.id = this.$store.state.flight.data.id;
    },
  },
  watch: {
    flightsFound: function (newValue) {
      this.flightsFound = newValue;
    },
  },
};
</script>

<style lang="scss">
.myCarousel {
  width: 100%;
  height: 550px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 1;
  transition: all 200ms ease 0s;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .myCarousel-banner {
    position: relative;
    width: 980px;
    height: 100%;
    display: flex;
    align-items: center;
    .myCarousel-banner__content {
      h2 {
        font-size: 34px;
        font-weight: 500;
        margin-bottom: 22px;
        color: white;
        text-align: center;
      }
      .myCarousel-banner__search {
        // background: rgba(255, 255, 255, 0.64);
        background: #fff;
        color: #484848;
        border-radius: 5px;
        height: 60px;
        font-size: 16px;
        .row {
          height: 100%;
          .btn-search {
            background: rgb(255, 197, 0);
            font-weight: bold;
          }
          i {
            color: rgb(0, 122, 255);
          }
          .myCarousel-banner__divide {
            width: 1px;
            height: 37px;
            background: rgb(187, 187, 187);
            transform: translateX(15px);
          }
          input {
            border: none;
            width: 100%;
            &:focus {
              outline: none;
            }
          }
        }
        .row-flex {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
