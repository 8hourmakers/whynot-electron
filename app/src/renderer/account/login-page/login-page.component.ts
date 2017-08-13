import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { UserService } from '../user.service';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
    isErrorCaught = false;
    errorMessage = '';
    model = {
        email: '',
        password: ''
    };

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
    }

    async login() {
        try {
            await this.userService
                .login(this.model.email, this.model.password);

            this.router.navigate(['/']);
        } catch (err) {
            this.isErrorCaught = true;

            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
                return;
            }

            if (err.status === 401) {
                this.errorMessage = '이메일 또는 비밀번호가 일치하지 않습니다.';
            } else {
                this.errorMessage = '예기치 못한 에러가 발생하였습니다 :(';
            }
        }
    }
}
