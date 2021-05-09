import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import {
  Card,
} from "../../components";
import { Plant } from "../../../domain";
import { useServices } from "../../hooks";
import colors from "../../styles/colors";
import { ListPlantsProps } from "./ListPlants.props";

export function ListPlants({ environment, handleOnPressPlant }: ListPlantsProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [plants, setPlants] = React.useState<Plant[]>([]);

  const { plantService } = useServices();

  useEffect(() => {
    setPage(1);
  }, [environment]);

  useEffect(() => {
    fetchPlants();
  }, [page]);

  async function fetchPlants() {
    setIsLoading(true);
    if (page == 1) {
      setPlants([]);
    }
    const response = await plantService.getPlants(
      { page, limit: 4 },
      environment
    );
    setPlants([...plants, ...response.data]);
    setTotalPages(response.pagination.totalPages);
    setIsLoading(false);
  }

  function handleOnFetchMorePlant(distance: number) {
    if (distance < 1) return;
    if (plants && page >= totalPages) return;

    setPage((oldValue) => oldValue + 1);
  }

  return (
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
      onEndReachedThreshold={0.1}
      onEndReached={({ distanceFromEnd }) =>
        handleOnFetchMorePlant(distanceFromEnd)
      }
      ListFooterComponent={
        isLoading ? <ActivityIndicator color={colors.green} size={40} /> : <></>
      }
    />
  );
}
