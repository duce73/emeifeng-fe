import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';

const request: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

request.interceptors.request.use(
  (config) => {
    // 在这里添加token等认证信息
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    // 统一错误处理
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权
          break;
        case 403:
          // 处理禁止访问
          break;
        case 404:
          // 处理未找到
          break;
        default:
          // 处理其他错误
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default request; 