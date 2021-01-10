import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";


createApp( App )
  .use( router ).mount( '#app' );
