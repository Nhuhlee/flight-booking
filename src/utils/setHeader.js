import { api } from "./../api";

const setHeader = ( token ) => {
  // console.log( { api } );
  if ( token ) {
    api.defaults.headers.common[ "token" ] = token;
  } else {
    delete api.defaults.headers.common[ "token" ];
  }
};

export default setHeader;
