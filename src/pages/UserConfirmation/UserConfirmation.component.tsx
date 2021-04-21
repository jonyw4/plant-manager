import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Button, Container } from "../../components";

export function UserConfirmationPage() {
  const { navigate } = useNavigation();
  return (
    <Container maxHeight={400}>
      <Text variant="heading">Oi! 👋</Text>
      <Text variant="title">Tudo certinho,</Text>
      <Text>
        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
      </Text>
      <Button onPress={() => navigate("AddPlant")}>Começar</Button>
    </Container>
  );
}
