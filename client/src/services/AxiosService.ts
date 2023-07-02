import { SERVER_URL } from '../secrets/secrets';
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

console.log(`(Axios) baseURL: ${SERVER_URL}`);

const apiAxiosInstance = Axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Referrer-Policy': 'no-referrer',
  },
});

export abstract class AxiosService {
  private readonly axios: AxiosInstance = apiAxiosInstance;

  protected constructor() {
    this.axios.interceptors.response.use(undefined, error => {
      return Promise.reject(error);
    });
  }

  public async get<T>(url: string, payload?: AxiosRequestConfig): Promise<T> {
    return this.axios.get<T>(url, payload).then(result => result.data);
  }

  public async post<Request, Payload>(
    url: string,
    payload?: Request,
  ): Promise<Payload> {
    return this.axios.post(url, payload);
  }

  public async put<Request, Payload>(
    url: string,
    payload?: Request,
  ): Promise<Payload> {
    return this.axios.put(url, payload);
  }

  public async delete<T>(url: string) {
    await this.axios.delete<T>(url);
  }
}
