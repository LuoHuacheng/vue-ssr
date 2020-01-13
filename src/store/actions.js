import { getTopicsByType, getTopicById, getUserByName } from '../api';

export default {
  // ensure data for rendering given list type
  FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
    commit('SET_ACTIVE_TYPE', { type });
    return getTopicsByType(type).then(topics => {
      commit('SET_LIST', { type, topics });
    });
  },

  FETCH_ITEM: ({ commit, state }, { id }) => {
    return state.items[id]
      ? Promise.resolve(state.items[name])
      : getTopicById(id).then(data => {
          commit('SET_ITEM', { id, data });
        });
  },

  FETCH_USER: ({ commit, state }, { name }) => {
    return state.users[name]
      ? Promise.resolve(state.users[name])
      : getUserByName(name).then(user => {
          commit('SET_USER', { name, user });
        });
  },
};
