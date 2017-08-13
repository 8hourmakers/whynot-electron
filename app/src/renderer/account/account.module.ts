import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserService } from './user.service';
import { AuthenticatedGuard } from './authauthenticated.guard';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        CoreModule
    ],
    declarations: [
        LoginPageComponent,
        RegisterPageComponent
    ],
    providers: [
        UserService,
        AuthenticatedGuard
    ],
    exports: [
        LoginPageComponent,
        RegisterPageComponent
    ]
})
export class AccountModule {

}
