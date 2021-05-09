import * as Notifications from 'expo-notifications';
import { UserPlantNotificationService } from '../data/UserPlantNotificationService';
import { Plant } from '../domain';

export class UserPlantExpoNotificationService
    implements UserPlantNotificationService {
    async schedule(plant: Plant, notificationDate: Date): Promise<string> {
        const nowDate = new Date();

        const seconds = Math.abs(
            Math.ceil((nowDate.getTime() - notificationDate.getTime()) / 1000)
        );

        return await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Heeey, 🌱',
                body: `Está na hora de cuidar da sua ${plant.name}`,
                sound: true,
                priority: Notifications.AndroidNotificationPriority.HIGH
            },
            trigger: {
                seconds: seconds < 60 ? 60 : seconds,
                repeats: true
            }
        });
    }
    async cancelSchedule(notificationID: string): Promise<void> {
        await Notifications.cancelScheduledNotificationAsync(notificationID);
    }
}
