import React from "react";
import { Text, Button, TextInput, Container } from "../../components";

export function UserConfirmationPage() {
  return (
    <Container maxHeight={400}>
      <Text variant="heading">Oi! 👋</Text>
      <Text variant="title">Tudo certinho,</Text>
      <Text>
        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
      </Text>
      <Button>Começar</Button>
    </Container>
  );
}
