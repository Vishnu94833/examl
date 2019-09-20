import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { RegisterModel } from '@app/models/register.model';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<RegisterModel[]>(`${environment.loginUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.loginUrl}/users/${id}`);
    }

    register(user: RegisterModel) {
        return this.http.post(`${environment.loginUrl}/users/register`, user);
    }

    update(user: RegisterModel) {
        return this.http.put(`${environment.loginUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.loginUrl}/users/${id}`);
    }
}