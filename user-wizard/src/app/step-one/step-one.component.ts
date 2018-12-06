import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

    user: any = {
        name: '',
        last_name: '',
        email: '',
        roles: []
    };

    constructor() { }

    ngOnInit() {
    }

}
