import React, { useEffect } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgFromUri } from 'react-native-svg';
import { Container, Text, Header, RadioGroup, Card } from "../../components";
import { usePlants, useEnvironments } from "../../hooks";

export function AddPlantPage() {
  const [environment, setEnvironment] = React.useState<string>();
  const { data: environments, isLoading: isLoadingEnvironments } = useEnvironments();
  const { isLoading: isLoadingPlants, data: plants } = usePlants(environment);
  
  if (isLoadingEnvironments || isLoadingPlants) {
    // TODO: Loading
    return null;
  }

  if(!plants || !environments){
    // TODO: Error
    return null;
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
          onChange={(value) => setEnvironment(value)}
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
          renderItem={({ item: plant }) => (
            <Card key={plant.id} title={plant.name}>
              <SvgFromUri uri={plant.photo}  height={80} />
            </Card>
          )}
        />
      </Container>
    </SafeAreaView>
  );
}
