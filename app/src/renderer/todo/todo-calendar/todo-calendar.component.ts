import { Component, Inject, OnInit } from '@angular/core';

import { CalendarTable, DateCell } from '../../ui/calendar/calendar-table.factory';
import { MonthSelection } from '../../ui/month-picker/month-picker.component';


@Component({
    selector: 'app-todo-calendar',
    templateUrl: './todo-calendar.component.html',
    styleUrls: ['./todo-calendar.component.less']
})
export class TodoCalendarComponent implements OnInit {
    year: number;
    month: number;
    calendarTable: CalendarTable;
    selection: Date;

    private renderCalendarTable() {
        this.calendarTable
            .setYear(this.year)
            .setMonth(this.month)
            .render();
    }

    constructor(@Inject(CalendarTable) private ctFactory: () => CalendarTable) {
        this.calendarTable = ctFactory();
    }

    ngOnInit() {
        const now = new Date();

        this.year = now.getFullYear();
        this.month = now.getMonth();
        this.selection = now;

        this.renderCalendarTable();
    }

    navMonth(selection: MonthSelection) {
        this.year = selection.year;
        this.month = selection.month;

        this.renderCalendarTable();
    }

    isSelected(cell: DateCell): boolean {
        if (cell.isBlank) {
            return false;
        }

        const date = cell.date;

        return this.selection.getFullYear() === date.getFullYear()
            && this.selection.getMonth() === date.getMonth()
            && this.selection.getDate() === date.getDate();
    }
}
