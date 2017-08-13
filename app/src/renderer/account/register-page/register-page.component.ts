import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { remote } from 'electron';

import { UserService } from '../user.service';


@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.less']
})
export class RegisterPageComponent implements OnInit {
    private dialog: Electron.Dialog;
    model = {
        email: '',
        username: '',
        password: '',
        passwordConfirm: ''
    };
    isErrorCaught = false;
    errorMessage = '';

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.dialog = remote.dialog;
    }

    close() {
        this.router.navigate(['/login']);
    }

    async registerNewAccount(): Promise<void> {
        if (this.model.password !== this.model.passwordConfirm) {
            this.isErrorCaught = true;
            this.errorMessage = '비밀번호가 일치하지 않습니다!';
            return;
        }

        try {
            await this.userService
                .register(
                    this.model.username,
                    this.model.email,
                    this.model.password
                );
        } catch (err) {
            this.isErrorCaught = true;

            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
                return;
            }

            if (err.status === 400) {
                this.errorMessage = '이미 존재하는 이메일입니다!';
            } else {
                this.errorMessage = '예기치 못한 에러가 발생하였습니다 :(';
            }

            return;
        }

        this.dialog
            .showMessageBox({
                type: 'info',
                message: '회원 가입에 성공하였습니다 :)'
            }, () => {
                this.router.navigate(['/']);
            });
    }
}
