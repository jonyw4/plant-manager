import React from "react";
import { SafeAreaView, Image } from "react-native";
import wateringImg from "../../assets/watering.png";
import { Text, Button } from "../../components";
import { styles } from './Welcome.style'

export function WelcomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="title">Gerencie suas plantas de forma fácil</Text>
      <Image source={wateringImg} style={styles.image} />
      <Text variant="subtitle">
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button>Avançar</Button>
    </SafeAreaView>
  );
}

