import { Plant } from '../domain';

export interface UserPlantNotificationService {
    schedule(plant: Plant, notificationDate: Date): Promise<string>;
    cancelSchedule(notificationID: string): Promise<void>;
}
