import React from "react";
import { View } from "react-native";
import { Container, Text } from "../../components";

export function AddPlant() {
  const userName = "Jony"
  return (
    <Container>
      <View>
        <Text variant="title">
          <Text weight="regular" variant="title">
            Olá,{" "}
          </Text>
          {userName}
        </Text>
      </View>

      <Text align="left">
        <Text weight="bold" align="left">
          Em qual ambiente
        </Text>{" "}
        você quer colocar sua planta?
      </Text>
    </Container>
  );
}
