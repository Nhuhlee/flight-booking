// todo: import
import { createRouter, createWebHistory } from "vue-router";
import jwtDecode from "jwt-decode";
// todo:

const routes = [
  {
    path: "",
    component: () => import( "./../Views/HomTemplate" ),
    children: [
      {
        path: "",
        component: () => import( "./../Views/HomTemplate/HomePage" ),
      },
      {
        path: "station",
        component: () => import( "./../Views/HomTemplate/StationPage" ),
      },
      {
        path: "station/:id",
        component: () => import( "./../Views/HomTemplate/DetailStationPage" ),
      },
      {
        path: "flight/:id",
        component: () => import( "./../Views/HomTemplate/FoundFlightsPage" ),
      },
      {
        path: "seat/:id",
        component: () => import( "./../Views/HomTemplate/SeatPage" ),
      },
      {
        path: "airports",
        component: () => import( "./../Views/HomTemplate/AirportPage" ),
      },
      {
        path: "airports/:id",
        component: () => import( "./../Views/HomTemplate/DetailAirportPage" ),
      },
    ],
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
  },

  {
    path: "/admin",
    component: () => import( "./../Views/AdminTemplate" ),
    beforeEnter ( to, from, next ) {
      if ( localStorage.getItem( "token" ) ) {
        try {
          const user = jwtDecode( localStorage.getItem( "token" ) );
          if ( user.userType === "Admin" ) {
            next();
          }
        } catch {
          next( "/admin/login" );
        }
      } else {
        next( "/admin/login" );
      }
    },
    children: [
      {
        path: "/admin/dashboard",
        component: () => import( "./../Views/AdminTemplate/DashboardPage" ),
      },
      {
        path: "/admin/stations",
        component: () => import( "./../Views/AdminTemplate/StationPage" ),
      },
      {
        path: "/admin/stations/:id/edit",
        component: () => import( "./../Views/AdminTemplate/EditStationPage" ),
      },
      {
        path: "/admin/tickets",
        component: () => import( "./../Views/AdminTemplate/TicketPage" ),
      },
      {
        path: "/admin/airports",
        component: () => import( "./../Views/AdminTemplate/AirportPage" ),
      },
      {
        path: "/admin/airports/:id/edit",
        component: () => import( "./../Views/AdminTemplate/EditAirportPage" ),
      },
      {
        path: "/admin/airports/add",
        component: () => import( "./../Views/AdminTemplate/AddAirportPage" ),
      },
      {
        path: "/admin/accounts",
        component: () => import( "./../Views/AdminTemplate/AccountPage" ),
      },
      {
        path: "/admin/accounts/add",
        component: () => import( "./../Views/AdminTemplate/AddAccountPage" ),
      },
      {
        path: "/admin/accounts/update",
        component: () => import( "./../Views/AdminTemplate/EditAccountPage" ),
      },
      {
        path: "/admin/about",
        component: () => import( "./../Views/AdminTemplate/AboutPage" ),
      },
      {
        path: "/admin/flights",
        component: () => import( "./../Views/AdminTemplate/FlightPage" ),
      },
      {
        path: "/admin/flights/add",
        component: () => import( "./../Views/AdminTemplate/FlightPage" ),
      },
      {
        path: "/admin/flights/:id/edit",
        component: () => import( "./../Views/AdminTemplate/EditFlightPage" ),
      },
    ],
  },
  {
    path: "/admin/login",
    component: () => import( "./../Views/AdminTemplate/AuthPage" ),
  },
  {
    path: "/:patchMatch(.*)*",
    component: () => import( "./../components/PageNotFound" ),
  },
  {
    path: '/login',
    component: () => import( "./../Views/LoginPage" )
  }
];

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  linkExactActiveClass: "active",
  routes,
} );

// console.log( "process.env.BASE_URL", process.env.BASE_URL );
export default router;
