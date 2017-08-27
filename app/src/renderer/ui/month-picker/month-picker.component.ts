import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface MonthSelection {
    year: number;
    month: number;
}


@Component({
    selector: 'app-month-picker',
    templateUrl: './month-picker.component.html',
    styleUrls: ['./month-picker.component.less']
})
export class MonthPickerComponent implements OnInit {
    @Output() monthSelect = new EventEmitter<MonthSelection>();
    currentYear: number;
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    selection: MonthSelection;
    pickerOpened = false;

    ngOnInit() {
        const now = new Date();

        this.selection = {
            year: now.getFullYear(),
            month: now.getMonth()
        };

        this.currentYear = this.selection.year;
    }

    navYear(direction: number) {
        this.currentYear += direction;
    }

    isMonthSelected(month: string) {
        return this.currentYear === this.selection.year
            && this.selection.month === this.months.indexOf(month);
    }

    selectMonth(month: string) {
        this.selection.year = this.currentYear;
        this.selection.month = this.months.indexOf(month);

        this.monthSelect.emit(this.selection);
        this.pickerOpened = false;
    }

    togglePick() {
        this.pickerOpened = !this.pickerOpened;
    }
}
