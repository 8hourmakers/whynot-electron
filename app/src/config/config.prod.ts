import { Config } from './config';


export class ProdConfig extends Config {
    RUN_TARGET = 'production';
    isProduction = true;
    enableAot = true;
}
