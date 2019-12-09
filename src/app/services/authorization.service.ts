import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
    public isAutenticated: EventEmitter<boolean> = new EventEmitter();
    public isAuth: boolean = true;

    public login(): void {
        localStorage.setItem('user', JSON.stringify('mike'));
        this.isAuth = true;
    }
    public logout(): void {
        localStorage.removeItem('user');
        this.isAuth = false;
    }
    public getUserInfo(): string {
        const user = localStorage.getItem('user');
        return user;
    }
    public autenticated(): Observable<boolean> {
        return of(this.isAuth);
    }
}
