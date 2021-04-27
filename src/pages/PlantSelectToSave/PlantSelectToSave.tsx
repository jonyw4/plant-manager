import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgFromUri } from 'react-native-svg';
import { Container, Text, Header, RadioGroup, Card } from "../../components";
import { Plant } from "../../domain";
import { usePlants, useEnvironments } from "../../hooks";

export function PlantSelectToSave() {
  const [environment, setEnvironment] = React.useState<string>();
  const {
    data: environments,
    isLoading: isLoadingEnvironments,
  } = useEnvironments();
  const { isLoading: isLoadingPlants, data: plants } = usePlants(environment);
  const navigation = useNavigation();

  if (isLoadingEnvironments || isLoadingPlants) {
    // TODO: Loading
    return null;
  }

  if (!plants || !environments) {
    // TODO: Error
    return null;
  }

  function handleOnChangeEnvironment(value: any) {
    setEnvironment(value);
  }

  function handleOnPressPlant(plant: Plant) {
    navigation.navigate("PlantSave", { plant });
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "flex-start" }}>
      <Container
        paddingVertical={30}
        paddingBottom={0}
        flexBasis="auto"
        flexGrow={0}
        alignItems="flex-start"
      >
        <Header title="Olá" subtitle="Jony" />
        <Text weight="bold" align="left">
          Em qual ambiente
        </Text>
        <Text align="left">você quer colocar sua planta?</Text>
      </Container>

      <View style={{ marginLeft: 32 }}>
        <RadioGroup
          defaultValue={environment}
          onChange={handleOnChangeEnvironment}
          options={environments.map((environment) => ({
            label: environment.title,
            value: environment.id,
          }))}
        />
      </View>
      <Container paddingVertical={0}>
        <FlatList
          data={plants}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: plant }) => (
            <Card
              title={plant.name}
              onPress={() => handleOnPressPlant(plant)}
              style={{ width: "45%", margin: 10 }}
            >
              <SvgFromUri uri={plant.photo} height={80} />
            </Card>
          )}
        />
      </Container>
    </SafeAreaView>
  );
}
