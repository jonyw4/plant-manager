import { NavigationContainer } from '@react-navigation/native'
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import * as Pages from "../pages";
import TabRoutes from './tabs'

const StackRoutes = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.white,
          },
        }}
      >
        <StackRoutes.Screen name="Welcome" component={Pages.WelcomePage} />
        <StackRoutes.Screen
          name="Confirmation"
          component={Pages.ConfirmationPage}
        />
        <StackRoutes.Screen
          name="UserIdentification"
          component={Pages.UserIdentificationPage}
        />
        <StackRoutes.Screen name="PlantSelectToSave" component={TabRoutes} />
        <StackRoutes.Screen name="PlantSave" component={Pages.PlantSavePage} />
        <StackRoutes.Screen name="UserPlants" component={TabRoutes} />
      </StackRoutes.Navigator>
    </NavigationContainer>
  );
}