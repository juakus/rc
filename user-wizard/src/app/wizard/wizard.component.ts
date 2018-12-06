
import { User } from './../models/user';
import { DataService } from './../data.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { StepOneComponent } from './../step-one/step-one.component';
import { StepTwoComponent } from './../step-two/step-two.component';


@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

    isLinear: boolean = true;
    preview: any = [];
    roles: any = [];

    @ViewChild(StepOneComponent) stepOne;
    @ViewChild(StepTwoComponent) stepTwo;

    constructor(public data: DataService) {
    }

    ngOnInit() {
        this.data.getRoles().subscribe(dat => {
            this.roles = dat;
            this.clearSelection();
        });
    }

    setPreview() {
        let roles = this.roles,
            ids = [];

        roles.forEach(x => {
            if (x.selected) ids.push(x.id);
        });

        this.stepOne.user.roles = ids;
        this.data.changeUser(this.stepOne.user);
    }

    resetFormData() {
        let blankUser = {
                name: '',
                last_name: '',
                email: '',
                roles: []
            };

        this.data.changeUser(blankUser);
        this.clearSelection();
    }

    submitUser() {
        const newUser: User = this.stepOne.user as User;

        this.data.addUser(newUser).subscribe(() => {
            this.resetFormData();
            alert('New user added');
        });
    }

    clearSelection() {
        this.roles.forEach(x => x.selected = false);
        this.data.changeSelectedRoles(this.roles);
    }

}
