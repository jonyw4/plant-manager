import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { Text, Button, TextInput, Container } from "../../components";
import { useUseCases } from "../../hooks/useUseCases";

export function UserIdentificationPage() {
  const [userName, setUserName] = useState<string>('');
  const { navigate } = useNavigation();
  const { saveUser } = useUseCases()
  const handleOnPressButton = async () => {
    await saveUser.execute(userName);
    navigate("UserConfirmation");
  }
  return (
    <Container maxHeight={400} dismissKeyboardOnTouch>
      <Text variant="heading">😊</Text>
      <Text variant="title">Como podemos {"\n"} chamar você?</Text>
      <TextInput onChangeText={(text) => setUserName(text)} />
      <Button onPress={() => handleOnPressButton()}>Confirmar</Button>
    </Container>
  );
}
