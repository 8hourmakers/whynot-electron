import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIModule } from '../ui/ui.module';

import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoCalendarComponent } from './todo-calendar/todo-calendar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UIModule
    ],
    declarations: [
        TodoCalendarComponent,
        TodoHomeComponent,
        TodoItemComponent
    ],
    providers: [],
    exports: [
        TodoCalendarComponent,
        TodoHomeComponent,
        TodoItemComponent
    ]
})
export class TodoModule {
}
