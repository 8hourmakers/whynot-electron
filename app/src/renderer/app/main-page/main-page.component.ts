import { Component } from '@angular/core';


interface Tab {
    id: number;
    name: string;
    value: string;
}


@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less']
})
export class MainPageComponent {
    tabs: Tab[] = [
        { id: 0, name: '홈', value: '' },
        { id: 1, name: '리스트', value: 'list' },
        { id: 2, name: '캘린더', value: 'calendar' }
    ];
    settingTab: Tab = {
        id: 3,
        name: '설정',
        value: 'setting'
    };
}
