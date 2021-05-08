import React from "react";
import { EnvironmentService, PlantService, UserPlantRepository, UserRepository } from "../../data";

export interface ServicesContextData {
  environmentService: EnvironmentService;
  plantService: PlantService;
  userPlantRepository: UserPlantRepository;
  userRepository: UserRepository;
}

// @ts-ignore
export const ServicesContext = React.createContext<ServicesContextData>();