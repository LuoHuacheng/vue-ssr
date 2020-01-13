import axios from 'axios';

const $http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 30000,
});

$http.interceptors.request.use(
  config => {
    // 统一修改请求地址参数
    return config;
  },
  error => Promise.reject(error)
);

$http.interceptors.response.use(
  response => {
    const result = response.data;
    if (result && result.success) {
      return result.data;
    }
    Promise.reject(response);
  },
  error => Promise.reject(error)
);

export default $http;
