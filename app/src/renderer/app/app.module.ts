import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppAuthGuard } from './app-auth.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';

import { CoreModule } from '../core/core.module';
import { AccountModule } from '../account/account.module';
import { TodoModule } from '../todo/todo.module';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        CoreModule,
        AccountModule,
        AppRoutingModule,
        TodoModule
    ],
    declarations: [
        MainPageComponent,
        AppComponent
    ],
    providers: [
        AppAuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
