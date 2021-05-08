import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgFromUri } from 'react-native-svg';
import {
  Container,
  Text,
  Header,
  RadioGroup,
  Card,
  Loading
} from "../../components";
import { Plant } from "../../../domain";
import { usePlants, useEnvironments, useUser } from "../../hooks";
import colors from "../../styles/colors";

export function PlantSelectToSave() {
  const [environment, setEnvironment] = React.useState<string>();
  const [page, setPage] = React.useState(1);
  const {
    data: environments,
    isLoading: isLoadingEnvironments,
  } = useEnvironments();
  const { isLoading: isLoadingPlants, data: plants } = usePlants({
    paginationOptions: {
      page,
      limit: 6
    }, 
    environment
  });
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
    setPage(1);
    setEnvironment(value);
  }

  function handleOnPressPlant(plant: Plant) {
    navigation.navigate("PlantSave", { plant });
  }

  function handleOnFetchMorePlant(distance: number) {
     if (distance < 1) return;
     if (plants && page >= plants.pagination.totalPages) return;

     setPage((oldValue) => oldValue + 1);
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
        <FlatList
          data={plants?.data || []}
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
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleOnFetchMorePlant(distanceFromEnd)
          }
          ListFooterComponent={
            isLoadingPlants ? <ActivityIndicator color={colors.green} size={40}/> : <></>
          }
        />
      </Container>
    </SafeAreaView>
  );
}
