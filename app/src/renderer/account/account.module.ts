import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { LoginPageComponent } from './login-page/login-page.component';
import { UserService } from './user.service';


@NgModule({
    imports: [
        CommonModule,
        CoreModule
    ],
    declarations: [
        LoginPageComponent
    ],
    providers: [
        UserService
    ],
    exports: [
        LoginPageComponent
    ]
})
export class AccountModule {

}
