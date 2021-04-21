import React from "react";
import { useNavigation } from '@react-navigation/native'
import { Text, Button, TextInput, Container } from "../../components";

export function UserIdentificationPage() {
  const { navigate } = useNavigation();
  return (
    <Container maxHeight={400} dismissKeyboardOnTouch>
      <Text variant="heading">😊</Text>
      <Text variant="title">Como podemos {"\n"} chamar você?</Text>
      <TextInput />
      <Button onPress={() => navigate('UserConfirmation')}>Confirmar</Button>
    </Container>
  );
}
