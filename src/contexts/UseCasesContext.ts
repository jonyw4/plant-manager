import React from "react";
import { EnvironmentService, PlantService } from "../data";
import { GetUserPlants, SaveUser } from "../useCases";

export interface UsesCasesContextData {
  getUserPlants: GetUserPlants;
  saveUser: SaveUser;
}

// @ts-ignore
export const UsesCasesContext = React.createContext<UsesCasesContextData>();
