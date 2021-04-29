import { UserPlantRepository } from "../data";
import { UseCase } from "./protocols/useCase";

export class RemoveUserPlantToCurrentUser implements UseCase<void> {
  constructor(private userPlantRepository: UserPlantRepository) {}
  public async execute(
    id: number
  ): Promise<void> {
    return await this.userPlantRepository.removePlantToCurrentUser(id);
  }
}
