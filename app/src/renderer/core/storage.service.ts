import { Injectable } from '@angular/core';
import * as path from 'path';
import { pathExists, writeJSON, readJSON } from 'fs-extra';

import { loadConfig } from '../../config';


const config = loadConfig();

@Injectable()
export class StorageService {
    data: object | null;
    filename = path.resolve(config.getPath('userData'), 'data.json');

    async load() {
        if (!await pathExists(this.filename)) {
            await writeJSON(this.filename, {});
        }

        this.data = await readJSON(this.filename);
    }

    async save() {
        await writeJSON(this.filename, this.data || {});
    }

    get (name: string): any {
        if (this.data === null) {
            return null;
        }

        return this.data[name];
    }

    set (name: string, value: any) {
        if (this.data === null) {
            return;
        }

        this.data[name] = value;
    }
}
