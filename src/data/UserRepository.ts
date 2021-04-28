import { Plant } from "../domain";
import { User } from "../domain/User";

export interface UserRepository {
  getCurrentUser(): Promise<User | undefined>
  saveUser(userName: string): Promise<User>
}