import { useNavigation } from "@react-navigation/native";
import React from "react";
import {  View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListPlants } from "../../cointaners";
import {
  Container,
  Text,
  Header,
  RadioGroup,
  Loading
} from "../../components";
import { useEnvironments, useUser } from "../../hooks";

export function PlantSelectToSavePage() {
  const [environment, setEnvironment] = React.useState<string>();
  const {
    data: environments,
    isLoading: isLoadingEnvironments,
  } = useEnvironments();
  const { isLoading: isLoadingUser, data: user } = useUser();
  const navigation = useNavigation()
 
  if (isLoadingEnvironments || isLoadingUser) {
    return <Loading />;
  }

  if (!environments || !user) {
    // TODO: Error
    return null;
  }

  function handleOnChangeEnvironment(value: any) {
    setEnvironment(value);
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
        <Header title="Olá" subtitle={user.name} />
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
        <ListPlants
          environment={environment}
          handleOnPressPlant={(plant) => {
            navigation.navigate("PlantSave", { plant });
          }}
        />
      </Container>
    </SafeAreaView>
  );
}
