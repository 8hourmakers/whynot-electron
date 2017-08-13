import { Window } from './window';
import { loadConfig } from '../../config';


const config = loadConfig();

export class AppWindow extends Window {
    constructor() {
        const templateUrl = config.isProduction
            ? 'app-aot.html'
            : 'app.html';

        super(templateUrl, {
            width: 375,
            height: 667,
            minWidth: 300,
            minHeight: 400
        });
    }
}
