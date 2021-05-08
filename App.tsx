import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { Routes } from './src/view/routes';
import { ServicesContext } from './src/view/contexts';
import { PlantInMemoryService, EnvironmentInMemoryService, UserPlantExpoNotificationService } from './src/infra';
import { UserPlantStorageRepository } from './src/infra/UserPlantStorageRepository';
import { UserStorageRepository } from './src/infra/UserStorageRepository';

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

  if(!fontsLoaded){
    return (
      <AppLoading/>
    )
  }
  return (
    <ServicesContext.Provider
      value={{
        plantService,
        environmentService,
        userPlantRepository,
        userRepository,
      }}
    >
      <Routes />
    </ServicesContext.Provider>
  );
}
