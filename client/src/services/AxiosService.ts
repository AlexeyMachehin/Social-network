import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AnyObject, AnyArray } from 'immer/dist/types/types-internal';

const isDev = process.env.NODE_ENV === 'development';
const path = isDev
  ? process.env.SERVER_DEV_PATH
  : process.env.SERVER_PRODUCTION_PATH;

console.log(`(Axios) Database uses at path: ${path}`);

const apiAxiosInstance = Axios.create({
  baseURL: path,
  headers: {
    'Referrer-Policy': 'no-referrer',
  },
});

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
