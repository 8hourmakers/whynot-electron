import { app, BrowserWindow } from 'electron';

import { whynotApp } from './whynot-app';


process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception: ', error.toString());

    if (error.stack) {
        console.error(error.stack);
    }
});

app.once('ready', () => {
    whynotApp.run();
    console.log('START! 😸');
});
