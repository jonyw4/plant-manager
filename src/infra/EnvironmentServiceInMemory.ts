import { EnvironmentService } from "../data";
import { Environment } from "../domain";
import * as data from "./fakeData";

export class EnvironmentServiceInMemory implements EnvironmentService {
  async getEnvironments(): Promise<Environment[]> {
    return data.plantsEnvironments.map((environment) => ({
      id: environment.key,
      title: environment.title
    }))
  }
}