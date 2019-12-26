import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    public loading = false;
    public subs: Subscription;

    private loginForm: FormGroup;
    private submitted = false;

    constructor(
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

        this.loading = true;
        this.subs = this.authenticationService.login(this.formControls.username.value, this.formControls.password.value)
            .pipe(first())
            .subscribe(
                (data) => {
                    this.router.navigate(['courses']);
                },
                (error) => {
                    this.loading = false;
                });
    }
    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
