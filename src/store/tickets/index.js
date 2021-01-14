import * as types from "./constant";
import { api } from "./../../api";
import router from "../../router";

const state = {
  loading: false,
  data: null,
  err: null,
};

const mutations = {
  [types.M_TICKET_REQUEST](state) {
    state.loading = true;
    state.data = null;
    state.err = null;
  },
  [types.M_TICKET_SUCCESS](state, payload) {
    state.loading = false;
    state.data = payload;
    state.err = null;
  },
  [types.M_TICKET_FAILED](state, payload) {
    state.loading = false;
    state.data = null;
    state.err = payload;
  },
};

const actions = {
  [types.A_FETCH_LIST_TICKET]({ commit }) {
    commit(types.M_TICKET_REQUEST);
    api
      .get("/tickets")
      .then((result) => {
        commit(types.M_TICKET_SUCCESS, result.data);
      })
      .catch((err) => {
        commit(types.M_TICKET_FAILED, err);
      });
  },
  fetchDetailTICKET({ commit }, id) {
    commit(types.M_TICKET_REQUEST);
    api
      .get(`/tickets/${id}`)
      .then((result) => {
        commit(types.M_TICKET_SUCCESS, result.data);
      })
      .catch((err) => {
        commit(types.M_TICKET_FAILED, err);
      });
  },
  fetchDeleteTICKET({ commit, dispatch }, id) {
    api
      .delete(`/tickets/${id}`)
      .then(() => {
        dispatch(types.A_FETCH_LIST_TICKET);
      })
      .catch((err) => {
        commit(types.M_TICKET_FAILED, err);
      });
  },
  fetchUpdateTICKET({ commit }, formTICKET) {
    api
      .put(`/tickets/${formTICKET.id}`, formTICKET)
      .then(() => {
        router.push("/admin/tickets");
      })
      .catch((err) => {
        commit(types.M_TICKET_FAILED, err);
      });
  },
};

export default { state, mutations, actions };
