import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { AppAuthGuard } from './app-auth.guard';
import { LoginPageComponent } from '../account/login-page/login-page.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        canActivate: [AppAuthGuard]
    },
    { path: 'login', component: LoginPageComponent }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes, {
    useHash: true
});
