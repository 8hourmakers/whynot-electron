import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {
    completed = false;

    ngOnInit() {

    }

    toggleCompletion(isCompleted: boolean) {
        this.completed = isCompleted;
    }
}
