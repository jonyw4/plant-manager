import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Button, Container } from "../../components";
import { useUser } from "../../hooks";

export function UserConfirmationPage() {
  const { isLoading: isLoadingUser, data: user } = useUser();
  const { navigate } = useNavigation();

  if (isLoadingUser) {
    // TODO: Loading
    return null;
  }

  if (!user) {
    // TODO: Error
    return null;
  }
  return (
    <Container maxHeight={400}>
      <Text variant="heading">Oi, {user.name}! 👋</Text>
      <Text variant="title">Tudo certinho,</Text>
      <Text>
        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
      </Text>
      <Button onPress={() => navigate("PlantSelectToSave")}>Começar</Button>
    </Container>
  );
}
