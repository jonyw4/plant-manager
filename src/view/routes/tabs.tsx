import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import * as Pages from "../pages";

const AppTab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: "beside-icon",
        labelStyle: {
          fontFamily: "Jost_400Regular",
          fontWeight: "400",
        },
        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 60,
        },
      }}
    >
      <AppTab.Screen
        name="PlantSelectToSave"
        component={Pages.PlantSelectToSavePage}
        options={{
          tabBarLabel: "Nova Planta",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="UserPlants"
        component={Pages.UserPlantsPage}
        options={{
          tabBarLabel: "Minhas Plantas",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default TabRoutes;
