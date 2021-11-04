import axios from "axios";
import envKey from "../key/env.key";
import httpInterceptor from "./interceptors.plugin";

const token = axios.CancelToken.source();

const httpPlugin = axios.create({
  baseURL: envKey.apiUrl,
  timeout: 15000,
});

httpPlugin.interceptors.request.use(
  httpInterceptor.interceptorsRequestConf,
  httpInterceptor.interceptorsRequestErr
);

httpPlugin.interceptors.response.use(
  httpInterceptor.interceptorsResponseConf,
  httpInterceptor.interceptorsRequestErr
);

export const cancelToken = token;

export default httpPlugin;
