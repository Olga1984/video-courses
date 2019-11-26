import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
    public isAutenticated: EventEmitter<boolean> = new EventEmitter();

    public login(): void {
        localStorage.setItem('user', JSON.stringify('mike'));
    }
    public logout(): void {
        localStorage.removeItem('user');
    }
    public getUserInfo(): string {
        const user = localStorage.getItem('user');
        return user;
    }
}
