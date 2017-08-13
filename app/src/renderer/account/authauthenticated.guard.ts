import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from './user.service';


@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) {
    }

    async canActivate(): Promise<boolean> {
        const hasLogin = await this.userService.checkIfLogin();

        if (hasLogin) {
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}
