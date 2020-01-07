import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Store } from '@ngrx/store';
import { Credentials } from '../../state/app.state';
import { LoginUserAction, SetCreadentialsAction } from './state/user.actions';
import { UsersState } from './state/user.state';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    public loading = false;

    private loginForm: FormGroup;
    private submitted = false;

    constructor(
        private store$: Store<UsersState>,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to courses if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['courses']);
        }
    }

    public ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    // getter for access to form fields
    get formControls(): any { return this.loginForm.controls; }

    public onSubmit(): any {
        this.submitted = true;
        // form is invalid
        if (this.loginForm.invalid) {
            return;
        }
    }
    public login(): void {
        const creds = {} as Credentials;
        creds.username = this.formControls.username.value;
        creds.password = this.formControls.password.value;

        this.store$.dispatch(new SetCreadentialsAction(creds));
        this.store$.dispatch(new LoginUserAction());
    }
}
