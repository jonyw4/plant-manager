import { UserRepository } from "../data/UserRepository";
import { User } from "../domain/User";
import { UseCase } from "./protocols/useCase";

export class SaveUser implements UseCase<User> {
  constructor(private userRepository: UserRepository) {}
  public async execute(name: string): Promise<User> {
    return this.userRepository.saveUser(name);
  }
}