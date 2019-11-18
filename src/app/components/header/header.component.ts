import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public isAuth: boolean;
    constructor(private auth: AuthorizationService) {}
    ngOnInit(): void {
        this.isAuth = this.auth.isAutenticated;
    }
}
