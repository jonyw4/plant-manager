import { PlantService, UserPlantRepository } from "../data";
import { UserPlant } from "../domain";
import { UseCase } from "./protocols/useCase";

export class AddUserPlantToCurrentUser implements UseCase<UserPlant> {
  constructor(
    private userPlantRepository: UserPlantRepository
  ) {}
  public async execute(
    plantID: number,
    nextNotificationDate: Date
  ): Promise<UserPlant> {
    const userPlant = await this.userPlantRepository.addPlantToCurrentUser(
      plantID,
      nextNotificationDate
    );
    return userPlant;
  }
}