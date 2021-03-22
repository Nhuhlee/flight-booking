import { api } from "./../../api";
import router from "../../router";
import jwtDecode from "jwt-decode";
import setHeader from "./../../utils/setHeader";
import * as types from './constant';


const state = {
  token: null,
  err: null,
  loading: false,
};

const mutations = {
  [ types.M_AUTH_REQUEST ] ( state ) {
    state.token = null;
    state.err = null;
    state.loading = true;
  },
  [ types.M_AUTH_SUCCESS ] ( state, payload ) {
    state.token = payload;
    state.err = null;
    state.loading = false;
  },
  [ types.M_AUTH_FAILED ] ( state, payload ) {
    state.token = null;
    state.err = payload;
    state.loading = false;
  },
  [ types.M_AUTH_CLEAR ] ( state ) {
    state.token = null;
    state.err = null;
    state.loading = false;
  },
};

const actions = {

  [ types.A_AUTH_LOGIN ] ( { commit, dispatch }, authData ) {
    commit( types.M_AUTH_REQUEST );



    api
      .post( "/login", {
        email: authData.email,
        password: authData.password,
      } )

      .then( ( result ) => {
        console.log( { 'response Token ': result.data.token } );
        commit( types.M_AUTH_SUCCESS, result.data.token );

        const user = jwtDecode( result.data.token );
        // console.log( { user } );

        if ( user.userType.toLowerCase() == "Client".toLocaleLowerCase() ) {
          return Promise.reject( {
            response: { data: { message: "Ban khong co quyen truy cap" } }
            
          } );
        }

        const exp = ( user.exp - user.iat ) * 1000;

        //lưu token xuống localStorage
        localStorage.setItem( "token", result.data.token );
        localStorage.setItem( "exp", user.exp );

        dispatch( types.A_AUTH_SET_TIME_OUT_LOGOUT, exp );
        setHeader( result.data.token );
        //chuyển hướng vào dashboard
        router.replace( "/admin/dashboard" );
      } )
      .catch( ( err ) => {
        commit( types.M_AUTH_FAILED, err );
      } );
  },

  [ types.A_AUTH_SET_TIME_OUT_LOGOUT ] ( { dispatch }, exp ) {
    setTimeout( () => {
      dispatch( types.A_AUTH_LOGOUT );
    }, exp );
  },

  [ types.A_AUTH_LOGOUT ] ( { commit } ) {
    commit( types.M_AUTH_CLEAR );
    localStorage.removeItem( "token" );
    localStorage.removeItem( "exp" );
    router.replace( "/admin/login" );
  },



  [ types.A_AUTH_TRY_AUTO_LOGIN ] ( { commit, dispatch } ) {
    const token = localStorage.getItem( "token" );
    if ( !token ) {
      return;
    }
    const exp = localStorage.getItem( "exp" );
    const date = new Date();
    if ( date.getTime() > exp * 1000 ) {
      dispatch( types.A_AUTH_LOGOUT );
      return;
    }
    setHeader( token );
    commit( "loginSuccess", token );
  },

  [ types.A_AUTH_TRY_AUTO_LOGIN ] ( { commit, dispatch } ) {
    const token = localStorage.getItem( 'token' );
    console.log( { token } );
    if ( !token ) { return; }

    const exp = localStorage.getItem( 'exp' );

    const date = new Date();

    if ( date.getTime() > exp * 1000 ) { dispatch( types.A_AUTH_LOGOUT ); return; }

    setHeader( token );
    commit( types.M_AUTH_SUCCESS, token );
  },

  [ types.A_AUTH_SignUp ] ( { commit }, user ) {
    commit( types.M_AUTH_REQUEST );

    api
      .post( '/users', user )
      .then( ( result ) => {
        console.log( result );
        commit( types.M_AUTH_SUCCESS, result.data );
        if ( result.status == 200 ) {
          router.replace( "/login" );
        }
      } )
      .catch( ( err ) => {
        commit( types.M_AUTH_ERROR, err );
      } );
  }
};

export default { state, mutations, actions };
