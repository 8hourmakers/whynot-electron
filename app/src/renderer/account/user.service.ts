import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { StorageService } from '../core/storage.service';

interface UserDataResp {
    username: string;
    email: string;
    token: string
}

interface UserInfo {
    username: string;
    email: string;
}

@Injectable()
export class UserService {
    hasLogin = false;
    userInfo: UserInfo;

    constructor(private http: HttpClient, private storageService: StorageService) {
    }

    isTokenExists(): boolean {
        console.log(this.storageService.data);
        return !!this.storageService.get('token');
    }

    async checkIfLogin() {
        if (!this.isTokenExists()) {
            return false;
        }

        const token = this.storageService.get('token');
        const headers = new HttpHeaders({
            Authorization: `token ${token}`
        });

        try {
            await this.http
                .get(
                    'http://8hourmakers.com/whynot/api/users/auth/token/',
                    { headers }
                )
                .toPromise();

            this.hasLogin = true;

            return true;
        } catch (err) {
            this.hasLogin = false;
            this.storageService.remove('token');

            return false;
        }
    }

    async login(email: string, password: string): Promise<void> {
        const resp: UserDataResp = await this.http
            .post<UserDataResp>(
                'http://8hourmakers.com/whynot/api/users/auth/',
                { email, password }
            )
            .toPromise();

        this.storageService.set('token', resp.token);
        this.userInfo = {
            username: resp.username,
            email: resp.email
        };
        this.hasLogin = true;
    }

    async register(username: string, email: string, password: string): Promise<void> {
        const resp: UserDataResp = await this.http
            .post<UserDataResp>(
                'http://8hourmakers.com/whynot/api/users/',
                { username, email, password }
            )
            .toPromise();

        this.storageService.set('token', resp.token);
        this.userInfo = {
            username: resp.username,
            email: resp.email
        };
        this.hasLogin = true;
    }
}
