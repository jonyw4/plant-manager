import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View, Image, Platform, Alert } from "react-native";
import { SvgFromUri } from "react-native-svg";
import { Button, Text, VerticalContainer } from "../../components";
import { Plant } from "../../domain";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { format, isBefore } from "date-fns";
import {
  headerStyle,
  waterTipsStyle,
  dateTimePickerStyle,
} from "./PlantSave.styles";
import waterdrop from "../../assets/waterdrop.png";
import { useUseCases } from "../../hooks";

interface Params {
  plant: Plant;
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");
  const navigation = useNavigation();
  const route = useRoute();
  const { addUserPlantToCurrentUser } = useUseCases();
  const { plant } = route.params as Params;

  function handleOpenDatetimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }
  
  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma hora no futuro! ⏰");
    }

    if (dateTime) setSelectedDateTime(dateTime);
  }

  async function handleSave() {
    try {
      const response = await addUserPlantToCurrentUser.execute(plant.id, selectedDateTime);
      console.log(response); 
      // navigation.navigate("Confirmation", {
      //   title: "Tudo certo",
      //   subtitle: `Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.`,
      //   buttonTitle: "Muito obrigado",
      //   icon: "hug",
      //   nextScreen: "MyPlants",
      // });
    } catch {
      Alert.alert("Não foi possível salvar. 😢");
    }
  }

  return (
    <SafeAreaView>
      <View style={headerStyle.root}>
        <SvgFromUri uri={plant.photo} height={180} width={180} />
        <Text variant="heading" style={headerStyle.title}>
          {plant.name}
        </Text>
        <Text variant="body">{plant.about}</Text>
      </View>
      <VerticalContainer>
        <View style={waterTipsStyle.root}>
          <Image source={waterdrop} style={waterTipsStyle.image} />
          <Text style={waterTipsStyle.text}>{plant.waterTips}</Text>
        </View>
        <Text style={dateTimePickerStyle.title}>
          Escolha o melhor horário para ser lembrado:
        </Text>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        <Text variant="title">{format(selectedDateTime, "HH:mm")}</Text>

        {Platform.OS === "android" && (
          <Button size="block" onPress={handleOpenDatetimePickerForAndroid}>
            Alterar horário
          </Button>
        )}

        <Button size="block" onPress={handleSave}>
          Cadastrar planta
        </Button>
      </VerticalContainer>
    </SafeAreaView>
  );
}