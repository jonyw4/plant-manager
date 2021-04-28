import { UserPlant } from "../domain";

export interface UserPlantRepository {
  getCurrentUserPlants(): Promise<UserPlant[]>;
  addPlantToCurrentUser(plantID: number, nextNotification: Date): Promise<UserPlant>;
  removePlantToCurrentUser(plantID: number): Promise<void>;
}
