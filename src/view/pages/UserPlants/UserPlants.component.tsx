import React from "react";
import { Feather } from "@expo/vector-icons";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { SafeAreaView, FlatList, Animated, View, ActivityIndicator, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import { Container, Header, Text, Swipeable } from "../../components";
import { ListItem } from "../../components/ListItem";
import { useServices, useUserPlants } from "../../hooks";
import colors from "../../styles/colors";
import { UserPlant } from "../../../domain";

export function UserPlantsPage() {
  const { userPlantRepository } = useServices();
  const { isLoading, data: userPlants, fetch: fetchUserPlants } = useUserPlants();

  async function handleOnDeletePlant({id, plant}: UserPlant){
    Alert.alert("Remover", `Deseja remover a ${plant.name}?`, [
      {
        text: "Não 🙏🏻",
        style: "cancel",
      },
      {
        text: "Sim 😥",
        onPress: async () => {
          try {
            await userPlantRepository.removePlantToCurrentUser(id);
            await fetchUserPlants();
          } catch (error) {
            Alert.alert("Não foi possível remover! 😥");
          }
        },
      },
    ]);
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
      }}
    >
      <Container
        paddingVertical={71}
        paddingBottom={0}
        flexBasis="auto"
        flexGrow={0}
        alignItems="flex-start"
      >
        <Header title="Minhas" subtitle="Plantinhas" />
      </Container>
      <Container paddingVertical={30} alignItems="flex-start">
        <Text variant="title">Próximas Regadas</Text>
        <FlatList
          data={userPlants || []}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          style={{ width: "100%" }}
          renderItem={({ item: userPlant }) => (
            <View style={{marginVertical: 5}}>
              <Swipeable
                swipeContent={
                  <Animated.View>
                    <View style={{ position: "relative", width: 80 }}>
                      <RectButton
                        style={{
                          width: 120,
                          height: "100%",
                          backgroundColor: colors.red,
                          borderRadius: 20,
                          flexDirection: "row",
                          padding: 20,
                          right: 40,
                          justifyContent: "flex-end",
                          alignItems: "center",
                          position: "relative",
                        }}
                        onPress={() => handleOnDeletePlant(userPlant)}
                      >
                        <Feather name="trash" size={32} color={colors.white} />
                      </RectButton>
                    </View>
                  </Animated.View>
                }
              >
                <ListItem
                  secondaryContent={
                    <>
                      <Text
                        variant="body"
                        style={{ fontSize: 13, lineHeight: 15 }}
                      >
                        Regar às
                      </Text>
                      <Text
                        variant="heading"
                        style={{ fontSize: 13, lineHeight: 15 }}
                      >
                        {format(userPlant.nextNotification, "p", {
                          locale: ptBR,
                        })}
                      </Text>
                    </>
                  }
                >
                  <SvgFromUri
                    uri={userPlant.plant.photo}
                    width={50}
                    height={50}
                  />
                  <Text weight="bold" style={{ marginLeft: 10 }}>
                    {userPlant.plant.name}
                  </Text>
                </ListItem>
              </Swipeable>
            </View>
          )}
          ListFooterComponent={
            isLoading ? (
              <ActivityIndicator color={colors.green} size={40} />
            ) : (
              <></>
            )
          }
        />
      </Container>
    </SafeAreaView>
  );
}
