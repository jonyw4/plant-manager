import { UserRepository } from "../data/UserRepository";
import { User } from "../domain/User";
import { UseCase } from "./protocols/useCase";

export class GetUser implements UseCase<User | undefined> {
  constructor(private userRepository: UserRepository) {}
  public async execute(): Promise<User | undefined> {
    return this.userRepository.getCurrentUser();
  }
}
