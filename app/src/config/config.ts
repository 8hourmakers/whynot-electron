let app;

declare var process: any;

const requireModule = () => {
    if (process.type === 'renderer') {
        app = require('electron').remote.app;
    } else {
        app = require('electron').app;
    }
};

export class Config {
    RUN_TARGET: string;
    isProduction: boolean;
    enableAot: boolean;

    getPath(name: string): string {
        if (!app) {
            requireModule();
        }

        return app.getPath(name);
    }
}
