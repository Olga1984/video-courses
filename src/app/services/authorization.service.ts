import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
    public isAutenticated: EventEmitter<boolean> = new EventEmitter();

    public login(): void {
        localStorage.setItem('user', JSON.stringify('mike'));
        console.log('logged in successfully');
    }
    public logout(): void {
        localStorage.removeItem('user');
        console.log('logged off');
    }
    public getUserInfo(): string {
        const user = localStorage.getItem('user');
        return user;
    }
}
