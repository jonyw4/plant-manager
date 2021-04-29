import React from "react";
import { GetUserPlants, SaveUser, AddUserPlantToCurrentUser, RemoveUserPlantToCurrentUser } from "../useCases";
import { GetUser } from "../useCases/GetUser";

export interface UsesCasesContextData {
  getUserPlants: GetUserPlants;
  saveUser: SaveUser;
  addUserPlantToCurrentUser: AddUserPlantToCurrentUser;
  removeUserPlantToCurrentUser: RemoveUserPlantToCurrentUser;
  getUser: GetUser;
}

// @ts-ignore
export const UsesCasesContext = React.createContext<UsesCasesContextData>();
