import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class Request {
  constructor(baseURL, timeout) {
    // 利用axios初始化自己的请求
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    // 定义统一拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }
  // 定义通用的请求方法
  request(config) {
    return this.instance.request(config);
  }
  // 定义get方法
  get(config) {
    return this.request({ ...config, method: "get" });
  }
  // 定义post方法
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

// 创建并暴露实例
export const myRequest = new Request(BASE_URL, TIMEOUT);
