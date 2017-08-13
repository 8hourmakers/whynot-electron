import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from '../core/core.module';

import { LoginPageComponent } from './login-page/login-page.component';
import { UserService } from './user.service';
import { AuthenticatedGuard } from './authauthenticated.guard';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        CoreModule
    ],
    declarations: [
        LoginPageComponent
    ],
    providers: [
        UserService,
        AuthenticatedGuard
    ],
    exports: [
        LoginPageComponent
    ]
})
export class AccountModule {

}
