import React from "react";
import { Text, Button, Container } from "../../components";
import { styles } from './Welcome.style'
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'
import wateringAndGrowingPlants from "../../../assets/watering-and-growing-plants.json";
import LottieView from "lottie-react-native";
import { View } from "react-native";

export function WelcomePage() {
  const { navigate } = useNavigation()
  return (
    <Container>
      <Text variant="heading">
        Gerencie {"\n"} suas plantas de {"\n"} forma fácil
      </Text>
      <View>
        <LottieView source={wateringAndGrowingPlants} autoPlay loop style={{width: 300, height: 300 }}/>
      </View>
      <Text>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button onPress={() => navigate("UserIdentification")}>
        Avançar
        <Feather name="chevron-right" />
      </Button>
    </Container>
  );
}

