import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 10,
      items: {
        /* [id: string]: Item */
      },
      users: {
        /* [name: string]: User */
      },
      lists: {
        all: [],
        good: [
          /* number */
        ],
        share: [],
        ask: [],
        job: [],
        dev: [],
      },
    },
    actions,
    mutations,
    getters,
  });
}
