import { Component, OnInit } from '@angular/core';

import { StorageService } from '../core/storage.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    constructor(private storageService: StorageService) {
    }

    async ngOnInit() {
        await this.storageService.load();
    }
}
