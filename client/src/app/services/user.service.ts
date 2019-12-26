import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) {}
    public getAll(): Observable<Array<User>> {
        return this.http.get<Array<User>>(`http://localhost:3004/users`);
    }
    public getById(id: number): Observable<any> {
        return this.http.get(`http://localhost:3004//users/${id}`);
    }
}
