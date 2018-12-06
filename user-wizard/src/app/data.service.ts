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

    private userSource = new BehaviorSubject({});
    currentUser = this.userSource.asObservable();

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
}
