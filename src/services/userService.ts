import { AxiosService } from './AxiosService';

class UserService extends AxiosService {
  baseUrl = '/api/users';

  public constructor() {
    super();
  }
//ок
  public async getUsers<T>() {
    const response = await this.get<any>(this.baseUrl);
    return response;
  }

  public async getUser(id: string) {
    const response = await this.get<{ id: string }>(`${this.baseUrl}:${id}`);
    return response;
  }
//ок
  public async createUser(userData: any) {
    await this.post(this.baseUrl, userData);
  }

  public async deleteUser(id: string) {
    await this.delete<{ id: string }>(`${this.baseUrl}:${id}`);
  }

  public async updateUser(id: string, userData: any) {
    await this.put(`${this.baseUrl}:${id}`, userData);
  }
}

export const userService = new UserService();

// router.get('/', getUsers);
// router.get('/:id', getUser);
// router.post('/', createUser);
// router.delete('/:id', deleteUser);
// router.put('/:id', updateUser);

