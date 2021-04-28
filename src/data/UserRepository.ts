import { Plant } from "../domain";
import { User } from "../domain/User";

export interface UserRepository {
  getCurrentUser(): Promise<User | undefined>
  getCurrentUserPlants(): Promise<Plant[]>
  saveUser(userName: string): Promise<User>
}