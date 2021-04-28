import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserRepository } from "../data";
import { User, Plant } from "../domain";

export class UserStorageRepository implements UserRepository {
  async getCurrentUser(): Promise<User | undefined> {
    const userName = await AsyncStorage.getItem('@plantmanager:user');
    if (!userName){
      return undefined
    }
    return {
      name: userName,
    };
  }
  async saveUser(userName: string): Promise<User> {
    await AsyncStorage.setItem("@plantmanager:user", userName);
    return {
      name: userName
    }
  }
  
}