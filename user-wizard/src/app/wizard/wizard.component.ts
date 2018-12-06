import { User } from './../models/user';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

    isLinear: boolean = true;
    userFormGroup: FormGroup;

    roles: any = [];
    preview: any = [];
    user: any;

    constructor(private fb: FormBuilder, public data: DataService) {
    }

    ngOnInit() {
        this.userFormGroup = this.fb.group({
            name: [''],
            last_name: [''],
            email: ['']
        });

        this.data.getRoles().subscribe(dat => {
            this.roles = dat;
            this.clearSelection();
        });
    }

    getObjectUser(){
        let userObj = this.userFormGroup.value,
            selectedRoles = this.roles.filter(x => x.selected),
            selectedIds = [];
        
        selectedRoles.forEach(x => {
            selectedIds.push(x.id);
        });

        userObj.roles = selectedIds;

        return userObj;
    }

    setPreview() {
        this.preview = [];
        this.user = this.getObjectUser();
        
        for (let key in this.user) {
            this.preview.push({ field: key, value: this.user[key] });
        }

    }

    submitUser() {
       const userToSave: User = this.user as User;

        this.data.addUser(userToSave).subscribe(() => {
            alert('New user added');
        });
    }

    updateSelection(role) {
        role.selected = !role.selected;
    }

    clearSelection() {
        this.roles.forEach(x => x.selected = false);
    }

}
