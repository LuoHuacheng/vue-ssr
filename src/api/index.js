import $http from '../util/http';

export function getTopicsByType(type) {
  return $http.get('/topics', {
    params: {
      page: 1,
      limit: 20,
      mdrender: false,
      tab: type,
    },
  });
}

export function getTopicById(id) {
  return $http.get(`/topic/${id}`);
}

export function getUserByName(name) {
  return $http.get(`/user/${name}`);
}
