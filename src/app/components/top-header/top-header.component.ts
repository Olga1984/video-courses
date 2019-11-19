import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
    public isAuth: boolean = true;
    private router: Router;
    constructor(private authorizationService: AuthorizationService, router: Router) {
        this.router = router;
    }
    ngOnInit(): void {
        this.authorizationService.isAutenticated.subscribe((status: boolean) => {
            this.isAuth = status;
        });
    }
    public logoff(): void {
        this.router.navigate(['/logoff']);
        this.authorizationService.isAutenticated.emit(false);
        this.authorizationService.logout();
    }
}
