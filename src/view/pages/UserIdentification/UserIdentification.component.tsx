import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { Text, Button, TextInput, Container } from "../../components";
import { useServices } from "../../hooks";
import { ConfirmationParams } from "../Confirmation/Confirmation.params";

export function UserIdentificationPage() {
  const [userName, setUserName] = useState<string>('');
  const { navigate } = useNavigation();
  const { userRepository } = useServices()
  const handleOnPressButton = async () => {
    await userRepository.saveUser(userName);
    navigate("Confirmation", {
      title: "Prontinho",
      subtitle: "",
      description:
        "Agora vamos começar a cuidas das suas plantinhas com muito cuidado",
      btnText: "Começar",
      goToPage: "PlantSelectToSave"
    } as ConfirmationParams);
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
