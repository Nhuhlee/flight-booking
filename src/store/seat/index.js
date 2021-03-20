import * as types from './constant';
// import axios from 'axios';
// const api = axios.create( {
//   baseURL: "https://vexere-2.herokuapp.com/api",
// } );
import api from './../../api';

const state = {
  loading: false,
  data: null,
  err: null,
};

const mutations = {
  [ types.M_SEAT_REQUEST ] ( state ) {
    state.loading = true;
    state.data = null;
    state.error = null;
  },

  [ types.M_SEAT_SUCCESS ] ( state, payload ) {
    state.loading = false;
    state.data = payload;
    state.err = null;
  },

  [ types.M_SEAT_FAILED ] ( state, payload ) {
    state.loading = false;
    state.data = null;
    state.error = payload;
  },
};

const actions = {
  [ types.A_FETCH_LIST_SEAT ] ( { commit } ) {
    commit( types.M_SEAT_REQUEST );

    api
      .get( '/trips' )
      .then( ( result ) => {
        console.log( result );
        commit( types.M_SEAT_SUCCESS, result.data[ 0 ].seats );
      } )
      .catch( ( error ) => {
        commit( types.M_SEAT_FAILED, error );
      } );
  },
};

export default { state, mutations, actions };

