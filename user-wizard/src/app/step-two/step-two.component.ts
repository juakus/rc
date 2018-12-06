import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../data.service";

@Component({
    selector: 'app-step-two',
    templateUrl: './step-two.component.html',
    styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

    selectedRoles: any = [];
    roles: any = [];

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.getRoles().subscribe(dat => {
            this.roles = dat;
            this.clearSelection();
        });
    }

    clearSelection() {
        this.roles.forEach(x => x.selected = false);
    }

    updateSelection(role) {
        role.selected = !role.selected;
        this.updateSelectedRoles();
    }

    updateSelectedRoles() {
        this.selectedRoles = [];
        this.roles.forEach(x => {
            if (x.selected) this.selectedRoles.push(x.id);
        });
    }

}
