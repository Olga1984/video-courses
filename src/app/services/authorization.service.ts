import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
    public isAutenticated: boolean = true;

    public login(): void {
        this.isAutenticated = true;
        localStorage.setItem('user', JSON.stringify('mike'));
        console.log('logged in successdfully');
    }
    public logout(): void {
        this.isAutenticated = true;
        localStorage.removeItem('user');
        console.log('logged off');
    }
    public getUserInfo(): string {
        const user = localStorage.getItem('user');
        return user;
    }
}
