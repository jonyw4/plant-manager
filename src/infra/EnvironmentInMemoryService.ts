import sleep from 'sleep-promise';
import { EnvironmentService } from '../data';
import { Environment } from '../domain';
import { IN_MEMORY_AWAIT_TIME } from './consts';
import * as data from './fakeData';

export class EnvironmentInMemoryService implements EnvironmentService {
    async getEnvironments(): Promise<Environment[]> {
        await sleep(IN_MEMORY_AWAIT_TIME);
        return data.plantsEnvironments.map((environment) => ({
            id: environment.key,
            title: environment.title
        }));
    }
}
