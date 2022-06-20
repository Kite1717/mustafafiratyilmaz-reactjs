/* eslint-disable camelcase */
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { apiBaseUrl } from "../config";

import axios from "axios";

type Methods = "POST" | "GET" | "DELETE" | "PUT" | "PATCH";

axios.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (!error.response) {
      window.location.reload();
    }

    if (error?.response?.status === 401) {
      window.open(`${window.location.origin}/logout`, "_self");
      /* window.location.href = '/logout' */
    } else {
      throw error;
    }
  }
);

interface RequestSettings<R> {
  path: string;
  method: Methods;
  body?: R;
  params?: object;
  responseType?: string;
}

class HttpClientService {
  private API_URL: string = apiBaseUrl;

  fetch<R, T>(config: RequestSettings<R>): Promise<T> {
    return new Promise((resolve, reject) => {
      axios({
        method: config.method,
        url: this.API_URL + config.path,
        data: config.body,
        params: config.params,
        responseType: config.responseType,
      } as AxiosRequestConfig)
        .then((response: AxiosResponse) => {
          resolve(response?.data as T);
        })
        .catch((e: any) => {
          try {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({ ...e.response, data: JSON.parse(e.response.data) });
          } catch (error) {
            reject(e.response);
          }
        });
    });
  }
}

export default new HttpClientService();
