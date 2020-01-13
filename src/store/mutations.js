import Vue from 'vue';

export default {
  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type;
  },

  SET_LIST: (state, { type, topics }) => {
    state.lists[type] = topics;
  },

  SET_ITEM: (state, { id, data }) => {
    Vue.set(state.items, id, data || false)
  },

  SET_USER: (state, { name, user }) => {
    Vue.set(state.users, name, user || false) /* false means user not found */
  }
};
