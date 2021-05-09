import { WaterFrequency } from './WaterFrequency';

export interface Plant {
  id: number;
  name: string;
  about: string;
  waterTips: string;
  photo: string;
  environments: string[];
  waterFrequency: WaterFrequency;
}
