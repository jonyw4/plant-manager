import { Plant } from "./Plant";

export interface UserPlant {
  id: number;
  plant: Plant
  nextNotification: Date 
}