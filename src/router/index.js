import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// route-level code splitting
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id));
const ItemView = () => import('../views/ItemView.vue');
const UserView = () => import('../views/UserView.vue');

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/all/:page(\\d+)?', component: createListView('all') },
      { path: '/good/:page(\\d+)?', component: createListView('good') },
      { path: '/share/:page(\\d+)?', component: createListView('share') },
      { path: '/ask/:page(\\d+)?', component: createListView('ask') },
      { path: '/job/:page(\\d+)?', component: createListView('job') },
      { path: '/dev/:page(\\d+)?', component: createListView('dev') },
      { path: '/topic/:id', component: ItemView },
      { path: '/user/:name', component: UserView },
      { path: '/', redirect: '/all' },
    ],
  });
}
