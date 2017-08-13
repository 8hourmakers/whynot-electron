import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { AppAuthGuard } from './app-auth.guard';
import { AuthenticatedGuard } from '../account/authauthenticated.guard';
import { LoginPageComponent } from '../account/login-page/login-page.component';
import { RegisterPageComponent } from '../account/register-page/register-page.component';

import { TodoHomeComponent } from '../todo/todo-home/todo-home.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        canActivate: [AppAuthGuard],
        children: [
            {
                path: '',
                component: TodoHomeComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [AuthenticatedGuard]
    },
    {
        path: 'register',
        component: RegisterPageComponent,
        canActivate: [AuthenticatedGuard]
    }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes, {
    useHash: true
});
