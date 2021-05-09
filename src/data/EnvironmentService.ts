import { Environment } from '../domain';

export interface EnvironmentService {
    getEnvironments(): Promise<Environment[]>;
}
