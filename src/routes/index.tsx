import { NavigationContainer } from '@react-navigation/native'
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import * as Pages from "../pages";

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
        <StackRoutes.Screen 
          name="Welcome" 
          component={Pages.WelcomePage} 
        />
        <StackRoutes.Screen
          name="UserConfirmation"
          component={Pages.UserConfirmationPage}
        />
        <StackRoutes.Screen
          name="UserIdentification"
          component={Pages.UserIdentificationPage}
        />
        <StackRoutes.Screen
          name="AddPlant"
          component={Pages.AddPlantPage}
        />
      </StackRoutes.Navigator>
    </NavigationContainer>
  );
}