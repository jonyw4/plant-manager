import React from "react";
import { Feather } from "@expo/vector-icons";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { SafeAreaView, FlatList, Animated, View, ActivityIndicator, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import { Container, Header, Loading, Text, Swipeable } from "../../components";
import { ListItem } from "../../components/ListItem";
import { useServices, useUserPlants } from "../../hooks";
import colors from "../../styles/colors";
import { UserPlant } from "../../../domain";

export function UserPlants() {
  const { userPlantRepository } = useServices();
  const { isLoading, data: userPlants } = useUserPlants();

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
        paddingVertical={60}
        paddingBottom={0}
        flexBasis="auto"
        flexGrow={0}
        alignItems="flex-start"
      >
        <Header title="Minhas" subtitle="Plantinhas" />
      </Container>
      <Container paddingVertical={30} alignItems="flex-start">
        <Text variant="heading">Próximas Regadas</Text>
        <FlatList
          data={userPlants || []}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          style={{ width: "100%" }}
          renderItem={({ item: userPlant }) => (
            <Swipeable
              swipeContent={
                <Animated.View>
                  <View>
                    <RectButton
                      style={{
                        width: 100,
                        height: "100%",
                        backgroundColor: colors.red,
                        borderRadius: 20,
                        flexDirection: "row",
                        padding: 20,
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
