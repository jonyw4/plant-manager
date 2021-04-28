import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { Routes } from './src/routes';
import { ServicesContext } from './src/contexts';
import { PlantInMemoryService, EnvironmentInMemoryService } from './src/infra';
import { UsesCasesContext } from './src/contexts/UseCasesContext';
import { GetUserPlants, SaveUser } from './src/useCases';
import { UserPlantStorageRepository } from './src/infra/UserPlantStorageRepository';
import { UserStorageRepository } from './src/infra/UserStorageRepository';

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });
  const plantService = new PlantInMemoryService();
  const environmentService = new EnvironmentInMemoryService();

  const userPlantRepository = new UserPlantStorageRepository(plantService);
  const userRepository = new UserStorageRepository();

  const getUserPlants = new GetUserPlants(userPlantRepository);
  const saveUser = new SaveUser(userRepository);

  if(!fontsLoaded){
    return (
      <AppLoading/>
    )
  }
  return (
    <ServicesContext.Provider value={{ plantService, environmentService }}>
      <UsesCasesContext.Provider value={{ getUserPlants, saveUser }}>
        <Routes />
      </UsesCasesContext.Provider>
    </ServicesContext.Provider>
  );
}
