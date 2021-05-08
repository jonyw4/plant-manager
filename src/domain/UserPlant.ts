import { Plant } from "./Plant";

export interface UserPlant {
  id: string;
  plant: Plant
  nextNotification: Date 
}