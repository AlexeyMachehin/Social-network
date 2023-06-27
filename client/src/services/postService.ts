import { AxiosService } from './AxiosService';

class PostService extends AxiosService {
  baseUrl = '/api/posts';

  public constructor() {
    super();
  }

  public async getPosts<T>(id: string) {
    const response = await this.get<any>(`${this.baseUrl}/${id}`);
    return response;
  }

  public async getUser(id: string) {
    const response = await this.get<{ id: string }>(`${this.baseUrl}/${id}`, {
      params: { id },
    });
    return response;
  }

  public async createPost(id: string, postData: any) {
    await this.post(`${this.baseUrl}/${id}`, postData);
  }

  public async deleteUser(id: string) {
    await this.delete<{ id: string }>(`${this.baseUrl}/${id}`);
  }

  public async updateUser(id: string, userData: any) {
    await this.put(`${this.baseUrl}/${id}`, userData);
  }
}

export const postService = new PostService();
