import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { DateHelper } from '../shared/date-helper/date-helper';

import { CalendarConfig } from './calendar/calendar-config';
import { CalendarTable, calendarTableFactory } from './calendar/calendar-table.factory';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MonthPickerComponent } from './month-picker/month-picker.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        CheckboxComponent,
        MonthPickerComponent
    ],
    providers: [
        CalendarConfig,
        {
            provide: CalendarTable,
            useFactory: calendarTableFactory,
            deps: [DateHelper, CalendarConfig]
        }
    ],
    exports: [
        CheckboxComponent,
        MonthPickerComponent
    ]
})
export class UIModule {
}
