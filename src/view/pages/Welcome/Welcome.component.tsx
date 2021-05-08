import React from "react";
import { Image } from "react-native";
import wateringImg from "../../../assets/watering.png";
import { Text, Button, Container } from "../../components";
import { styles } from './Welcome.style'
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

export function WelcomePage() {
  const { navigate } = useNavigation()
  return (
    <Container>
      <Text variant="heading">
        Gerencie {"\n"} suas plantas de {"\n"} forma fácil
      </Text>
      <Image source={wateringImg} style={styles.image} resizeMode="contain" />
      <Text>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button onPress={() => navigate('UserIdentification')}>
        Avançar
        <Feather name="chevron-right" />
      </Button>
    </Container>
  );
}

