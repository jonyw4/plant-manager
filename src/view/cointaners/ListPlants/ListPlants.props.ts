import { Plant } from '../../../domain';

export interface ListPlantsProps {
    environment: string | undefined;
    handleOnPressPlant: (plant: Plant) => void;
}
