import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoHomeComponent } from './todo-home/todo-home.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TodoHomeComponent
    ],
    providers: [],
    exports: [
        TodoHomeComponent
    ]
})
export class TodoModule {
}
