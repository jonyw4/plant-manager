import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, Button, Container } from "../../components";
import { ConfirmationParams } from "./Confirmation.params";

export function ConfirmationPage() {
  const { navigate } = useNavigation();
  const route = useRoute();
  const {
    title,
    description,
    subtitle,
    btnText,
    goToPage,
  } = route.params as ConfirmationParams;
  return (
    <Container maxHeight={400}>
      <Text variant="heading">{title}</Text>
      <Text variant="title">{subtitle}</Text>
      <Text>{description}</Text>
      <Button onPress={() => navigate(goToPage)}>{btnText}</Button>
    </Container>
  );
}
