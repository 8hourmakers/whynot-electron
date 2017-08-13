import { Injectable } from '@angular/core';
import * as path from 'path';
import { pathExistsSync, writeJSONSync, readJSONSync } from 'fs-extra';

import { loadConfig } from '../../config';


const config = loadConfig();

@Injectable()
export class StorageService {
    isLoaded = false;
    data: object | null;
    filename = path.resolve(config.getPath('userData'), 'data.json');

    load() {
        if (!pathExistsSync(this.filename)) {
            writeJSONSync(this.filename, {});
        }

        this.data = readJSONSync(this.filename);
    }

    save() {
        writeJSONSync(this.filename, this.data || {});
    }

    get (name: string): any {
        if (!this.isLoaded) {
            this.load();
            this.isLoaded = true;
        }

        return this.data[name];
    }

    set (name: string, value: any) {
        if (this.data === null) {
            return;
        }

        this.data[name] = value;
        this.save();
    }

    remove(name: string) {
        this.data[name] = null;
        this.save();
    }
}
