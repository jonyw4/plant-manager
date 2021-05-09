import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserRepository } from "../data";
import { User } from "../domain";
import { UserModel } from "./models";

export class UserDeviceStorageRepository implements UserRepository {
  async getCurrentUser(): Promise<User | undefined> {
    const response = await AsyncStorage.getItem("@plantmanager:user");
    if (!response) {
      return undefined;
    }
    const userModel = JSON.parse(response) as UserModel;
    
    return userModel;
  }
  async saveUser(userName: string): Promise<User> {
    const user: User = {
      name: userName
    }
    await AsyncStorage.setItem("@plantmanager:user", JSON.stringify(user));
    return user
  }
}