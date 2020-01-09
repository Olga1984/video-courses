import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add header with token if available
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.fakeToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentUser.fakeToken}`
                }
            });
        }

        return next.handle(request);
    }
}
