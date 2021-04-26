import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { Routes } from './src/routes';
import { ServicesContext } from './src/contexts';
import { PlantServiceInMemory, EnvironmentServiceInMemory } from './src/infra';

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });
  const plantService = new PlantServiceInMemory();
  const environmentService = new EnvironmentServiceInMemory();

  if(!fontsLoaded){
    return (
      <AppLoading/>
    )
  }
  return (
    <ServicesContext.Provider value={{ plantService, environmentService }}>
      <Routes />
    </ServicesContext.Provider>
  );
}
