import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor() {}
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('user');
        // Check the token is exist and return
        // true or false
        return !!token;
    }
}
