import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
    selector: 'app-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

    user: any;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.currentUser.subscribe(user => {
            this.user = user;
        })
    }

}
