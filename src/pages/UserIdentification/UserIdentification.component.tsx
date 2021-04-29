import React from "react";
import { useNavigation } from '@react-navigation/native'
import { Text, Button, TextInput, Container } from "../../components";
import { useUseCases } from "../../hooks/useUseCases";

export function UserIdentificationPage() {
  const { navigate } = useNavigation();
  const { saveUser } = useUseCases()
  const handleOnPressButton = async () => {
    const response = await saveUser.execute('nome')
    navigate("UserConfirmation");
  }
  return (
    <Container maxHeight={400} dismissKeyboardOnTouch>
      <Text variant="heading">😊</Text>
      <Text variant="title">Como podemos {"\n"} chamar você?</Text>
      <TextInput />
      <Button onPress={() => handleOnPressButton()}>Confirmar</Button>
    </Container>
  );
}
