import { Injectable } from '@angular/core';

import { StorageService } from '../core/storage.service';


@Injectable()
export class UserService {
    hasLogin = false;

    constructor(private storageService: StorageService) {
    }

    isTokenExists(): boolean {
        return !!this.storageService.get('token');
    }

    async checkIfLogin() {
        return true;
    }
}
