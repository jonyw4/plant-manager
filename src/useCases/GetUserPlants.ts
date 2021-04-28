import { UserPlantRepository } from "../data";
import { UserPlant } from "../domain";
import { UseCase } from "./protocols/useCase";

export class GetUserPlants implements UseCase<UserPlant[]> {
  constructor(private userPlantRepository: UserPlantRepository) {}
  public async execute(): Promise<UserPlant[]> {
    const userPlants = await this.userPlantRepository.getCurrentUserPlants();

    return userPlants.sort((a, b) =>
      Math.floor(
        new Date(a.nextNotification).getTime() / 1000 -
        Math.floor(new Date(b.nextNotification).getTime() / 1000)
      )
    );
  }
}