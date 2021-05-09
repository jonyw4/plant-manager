import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { Routes } from './view/routes';
import { ServicesContext } from './view/contexts';
import {
  PlantInMemoryService,
  EnvironmentInMemoryService,
  UserPlantExpoNotificationService,
  UserDeviceStorageRepository,
  UserPlantDeviceStorageRepository
} from './infra';
import { registerRootComponent } from 'expo';

function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  // SERVICES
  const plantService = new PlantInMemoryService();
  const environmentService = new EnvironmentInMemoryService();
  const userPlantNotificationService = new UserPlantExpoNotificationService();

  // REPOSITORIES
  const userPlantRepository = new UserPlantDeviceStorageRepository(
    plantService,
    userPlantNotificationService
  );
  const userRepository = new UserDeviceStorageRepository();

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ServicesContext.Provider
      value={{
        plantService,
        environmentService,
        userPlantRepository,
        userRepository
      }}
    >
      <Routes />
    </ServicesContext.Provider>
  );
}

export default registerRootComponent(App);
