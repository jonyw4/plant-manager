import { UserPlant } from "../domain";

export interface UserPlantRepository {
  getCurrentUserPlants(): Promise<UserPlant[]>;
  addPlantToCurrentUser(
    plantID: number,
    nextNotificationDate: Date
  ): Promise<UserPlant>;
  removePlantToCurrentUser(id: string): Promise<void>;
}
