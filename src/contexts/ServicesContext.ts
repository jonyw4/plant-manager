import React from "react";
import { EnvironmentService, PlantService } from "../data";

export interface ServicesContextData {
  environmentService: EnvironmentService;
  plantService: PlantService;
}

// @ts-ignore
export const ServicesContext = React.createContext<ServicesContextData>();