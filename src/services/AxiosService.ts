/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/namespace */
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const isDev = process.env.NODE_ENV === 'development';
const path = isDev
  ? 'http://localhost:5000'
  : 'https://social-network-server-jciy.onrender.com';

console.log(`database connected on path: ${path}`);

const apiAxiosInstance = Axios.create({
  baseURL: path,
  headers: {
    'Referrer-Policy': 'no-referrer',
  },
});
import { AnyObject, AnyArray } from 'immer/dist/types/types-internal';

export type IBasePayload = AnyObject | AnyArray;

export abstract class AxiosService {
  private readonly axios: AxiosInstance = apiAxiosInstance;

  protected constructor() {
    this.axios.interceptors.response.use(undefined, error => {
      return Promise.reject(error);
    });
  }

  public async get<T>(url: string, payload?: AxiosRequestConfig): Promise<T> {
    return await this.axios.get<T>(url, payload).then(result => result.data);
  }

  public async post<Request, Payload extends IBasePayload>(
    url: string,
    payload?: Request,
  ): Promise<Payload> {
    return this.axios.post(url, payload);
  }

  public async put<Request, Payload extends IBasePayload>(
    url: string,
    payload?: Request,
  ): Promise<Payload> {
    return this.axios.put(url, payload);
  }

  public async delete<T>(url: string) {
    await this.axios.delete<T>(url);
  }
}
