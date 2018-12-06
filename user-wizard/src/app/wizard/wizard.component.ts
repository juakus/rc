
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

    @ViewChild(StepOneComponent) stepOne;
    @ViewChild(StepTwoComponent) stepTwo;

    constructor(public data: DataService) {
    }

    ngOnInit() {
    }

    setPreview() {
        this.stepOne.user.roles = this.stepTwo.selectedRoles;
        this.data.changeUser(this.stepOne.user);
    }

    resetFormData(){
        this.stepOne.user = {
            name: '',
            last_name: '',
            email: '',
            roles: []
        };
        this.stepTwo.selectedRoles = [];
    }

    submitUser() {
        const newUser: User = this.stepOne.user as User;

        this.data.addUser(newUser).subscribe(() => {
            this.resetFormData();
            alert('New user added');
        });
    }

}
