import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { User } from './models/user';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    roles_url: string = 'https://raw.githubusercontent.com/roycecorp/challenge/master/roles.json';
    users_url: string = 'http://localhost:3000/royce-users';

    private userSource = new BehaviorSubject({
        name: '',
        last_name: '',
        email: '',
        roles: []
    });
    currentUser = this.userSource.asObservable();

    private selectedRolesSource = new BehaviorSubject([]);
    currentselectedRoles = this.selectedRolesSource.asObservable();

    constructor(private http: HttpClient) { }

    getRoles() {
        return this.http.get(this.roles_url)
    }

    addUser(user: User) {
        return this.http.post(this.users_url, user)
    }

    changeUser(user: any) {
        this.userSource.next(user);
    }

    changeSelectedRoles(selected: any) {
        this.selectedRolesSource.next(selected);
    }
}
