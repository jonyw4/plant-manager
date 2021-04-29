import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { Routes } from './src/routes';
import { ServicesContext } from './src/contexts';
import { PlantInMemoryService, EnvironmentInMemoryService, UserPlantExpoNotificationService } from './src/infra';
import { UsesCasesContext } from './src/contexts/UseCasesContext';
import { AddUserPlantToCurrentUser, GetUserPlants, RemoveUserPlantToCurrentUser, SaveUser } from './src/useCases';
import { UserPlantStorageRepository } from './src/infra/UserPlantStorageRepository';
import { UserStorageRepository } from './src/infra/UserStorageRepository';
import { GetUser } from './src/useCases/GetUser';

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  // SERVICES
  const plantService = new PlantInMemoryService();
  const environmentService = new EnvironmentInMemoryService();
  const userPlantNotificationService = new UserPlantExpoNotificationService();

  // REPOSITORIES
  const userPlantRepository = new UserPlantStorageRepository(
    plantService,
    userPlantNotificationService
  );
  const userRepository = new UserStorageRepository();
  
  // USE CASES
  const addUserPlantToCurrentUser = new AddUserPlantToCurrentUser(
    userPlantRepository
  );
  const removeUserPlantToCurrentUser = new RemoveUserPlantToCurrentUser(
    userPlantRepository
  );
  const getUserPlants = new GetUserPlants(userPlantRepository);
  const getUser = new GetUser(userRepository);
  const saveUser = new SaveUser(userRepository);

  if(!fontsLoaded){
    return (
      <AppLoading/>
    )
  }
  return (
    <ServicesContext.Provider value={{ plantService, environmentService }}>
      <UsesCasesContext.Provider
        value={{
          getUser,
          getUserPlants,
          saveUser,
          removeUserPlantToCurrentUser,
          addUserPlantToCurrentUser,
        }}
      >
        <Routes />
      </UsesCasesContext.Provider>
    </ServicesContext.Provider>
  );
}
