import React from "react";
import { View } from "react-native";
import { Container, Text, Header, RadioGroup } from "../../components";

export function AddPlant() {
  return (
    <View style={{ flex: 1, alignContent: "center" }}>
      <Container>
        <Header title="Olá" subtitle="Jony" />
        <View style={{ width: "100%", marginTop: 20 }}>
          <Text weight="bold" align="left">
            Em qual ambiente
          </Text>
          <Text align="left">você quer colocar sua planta?</Text>
        </View>
      </Container>
      <View style={{ marginLeft: 32 }}>
        <RadioGroup
          options={[
            { label: "Sala", value: "sala" },
            { label: "Quarto", value: "quarto" },
            { label: "Cozinha", value: "cozinha" },
            { label: "Banheiro", value: "banheiro" },
            { label: "Sacada", value: "sacada" },
          ]}
        />
      </View>
      <Container>
        <Text>Conteúdo</Text>
      </Container>
    </View>
  );
}
