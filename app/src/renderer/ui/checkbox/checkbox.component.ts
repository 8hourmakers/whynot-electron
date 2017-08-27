import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';


@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit {
    @Input() initChecked = false;
    @Output() toggle = new EventEmitter<boolean>();
    checked: boolean;

    ngOnInit() {
        this.checked = this.initChecked;
    }

    toggleCheckbox() {
        this.toggle.emit(this.checked);
    }
}
