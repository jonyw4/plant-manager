import { NavigationContainer } from '@react-navigation/native'
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import { UserIdentificationPage, WelcomePage } from "../pages";
import { UserConfirmationPage } from "../pages/UserConfirmation";

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
        <StackRoutes.Screen name="Welcome" component={WelcomePage} />
        <StackRoutes.Screen
          name="UserConfirmation"
          component={UserConfirmationPage}
        />
        <StackRoutes.Screen
          name="UserIdentification"
          component={UserIdentificationPage}
        />
      </StackRoutes.Navigator>
    </NavigationContainer>
  );
}