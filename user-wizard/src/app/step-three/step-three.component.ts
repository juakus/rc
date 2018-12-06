import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
    selector: 'app-step-three',
    templateUrl: './step-three.component.html',
    styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {

    user: any;
    previewData: any = [];

    constructor(public data: DataService) { }

    ngOnInit() {
        this.data.currentUser.subscribe(user => {
            this.user = user;
            this.setPreviewData();
        })
    }

    setPreviewData(){
        let listLables: any = {
            name: "First Name",
            last_name: "Last Name",
            email: "Email",
            roles: "Roles"
        };

        this.previewData = [];
        
        for (let key in listLables) {
            this.previewData.push({ field: listLables[key], value: this.user[key] });
        }
    }

}
