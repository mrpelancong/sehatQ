
import HomePage from '../pages/home.jsx';
import SearchPage from '../pages/search.jsx';
import LoginPage from '../pages/login.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';

import TabHome from '../pages/tabs/home.jsx';
import TabWish from '../pages/tabs/wishlist.jsx';
import TabCart from '../pages/tabs/cart.jsx';


import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';

import store from './store.js';

var routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/search',
    async: function ({ router, to, resolve }) {
      setTimeout(function () {
        resolve(
          {
            component: SearchPage,
          },
          {
            props: {
              products: store.state.products,
            }
          }
        );
      }, 1000)
    }
  },
  {
    path: '/home/',
    component: HomePage,
    tabs: [
      {
        path: '/',
        id: 'tab1',
        async: function ({ router, to, resolve }) {
          // App instance
          var app = router.app;
          store.dispatch('addCategories');
          store.dispatch('addProduct');
          setTimeout(function () {
            resolve(
              {
                component: TabHome,
              },
              {
                props: {
                  categories: store.state.categories,
                  products: store.state.products,
                }
              }
            );
          }, 2500)
        }
      },
      {
        path: '/tab2/',
        id: 'tab2',
        async: function ({ router, to, resolve }) {
          setTimeout(function () {
            resolve(
              {
                component: TabWish,
              },
              {
                props: {
                  wishlist: store.state.wishlist,
                }
              }
            );
          }, 2500)
        }
      },
      {
        path: '/tab3/',
        id: 'tab3',
        async: function ({ router, to, resolve }) {
          setTimeout(function () {
            resolve(
              {
                component: TabCart,
              },
              {
                props: {
                  cart: store.state.cart,
                }
              }
            );
          }, 2500)
        }
      },
      {
        path: '/tab4/',
        id: 'tab4',
        async: function ({ router, to, resolve }) {
          router.navigate('/')
        }
      },
    ],
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
