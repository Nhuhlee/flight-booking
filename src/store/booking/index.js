import * as types from "./constant";
import { api } from "./../../api";
import router from "../../router";

const state = {
  loading: false,
  data: null,
  err: null,
};

const mutations = {
  [types.M_BOOKING_REQUEST](state) {
    state.loading = true;
    state.data = null;
    state.err = null;
  },
  [types.M_BOOKING_SUCCESS](state, payload) {
    state.loading = false;
    state.data = payload;
    state.err = null;
  },
  [types.M_BOOKING_FAILED](state, payload) {
    state.loading = false;
    state.data = null;
    state.err = payload;
  },
};

const actions = {
  [types.A_FETCH_LIST_BOOKING]({ commit }) {
    commit(types.M_BOOKING_REQUEST);
    api
      .get("/booking")
      .then((result) => {
        commit(types.M_BOOKING_SUCCESS, result.data);
      })
      .catch((err) => {
        commit(types.M_BOOKING_FAILED, err);
      });
  },
  fetchAddBooking({ commit }, formBooking) {
    api
      .post(`/booking/`, formBooking)
      .then(() => {
        router.push("/admin/bookings");
      })
      .catch((err) => {
        commit(types.M_BOOKING_FAILED, err);
      });
  },
};

export default { state, mutations, actions };
