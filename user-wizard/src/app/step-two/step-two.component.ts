import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
    selector: 'app-step-two',
    templateUrl: './step-two.component.html',
    styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

    roles: any = [];

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.currentselectedRoles.subscribe(roles => {
            this.roles = roles;
        })
    }

    updateSelection(role) {
        role.selected = !role.selected;
    }

}
