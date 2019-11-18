import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
    public isAuth: boolean;
    constructor(private auth: AuthorizationService) {}
    ngOnInit(): void {
        this.isAuth = this.auth.isAutenticated;
    }
    public logoff(): void {
       this.auth.logout();
    }
}
