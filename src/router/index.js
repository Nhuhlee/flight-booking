// todo: import
import { createRouter, createWebHistory } from "vue-router";

// todo: 

const routes = [
  {
    path: '', component: () => import( './../Views/HomTemplate' ),
    children: [
      {
        path: '',
        component: () => import( './../Views/HomTemplate/HomePage' )
      },
      {
        path: 'station',
        component: () => import( './../Views/HomTemplate/StationPage' )
      }
      ,
      {
        path: 'station/:id',
        component: () => import( './../Views/HomTemplate/DetailStationPage' )
      }
    ]
  },
  {
    path: '/:patchMatch(.*)*',
    component: () => import( './../components/PageNotFound' )
  }
];

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  linkExactActiveClass: "active",
  routes,
} );

export default router;
