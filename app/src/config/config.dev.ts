import { Config } from './config';


export class DevConfig extends Config {
    RUN_TARGET = 'development';
    isProduction = false;
    enableAot = false;
}
