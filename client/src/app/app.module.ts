import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './components/logo/logo.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { BorderStyleDirective } from './directives/border-style/border-style.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FindCoursePipe } from './pipes/find-course.pipe';
import { CoursesService } from './services/courses.service';
import { LoginPageModule } from './pages/login-page.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './pages/userlogin/login.component';
import { UserService } from './services/user.service';
import { SpinnerModule } from './components/spinner-container/spinner.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TranslateModule } from '@ngx-translate/core';
import { appReducers } from './state/app.reducer';
import { AppEffects } from './state/app.effects';
import { SearchBarModule } from './components/search-bar-authors/search-bar.module';
import { AuthorsSearchComponent } from './components/search-bar-authors/services-search/authors-search.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { breadcrumb: 'login' }
    },
    {
        path: 'courses',
        component: MainComponent,
        canActivate: [AuthGuardService],
        data: { breadcrumb: 'courses' }
    },
    {
        path: 'courses/:id',
        component: CreateEditComponent,
        canActivate: [AuthGuardService],
        data: { breadcrumb: 'courses/edit' }
    },
    {
        path: 'courses/new',
        canActivate: [AuthGuardService],
        component: CreateEditComponent,
        data: { breadcrumb: 'courses/new' }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'courses'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        BreadcrumbsComponent,
        LogoComponent,
        VideoListComponent,
        ListItemComponent,
        NotFoundComponent,
        BorderStyleDirective,
        DurationPipe,
        OrderByPipe,
        FindCoursePipe,
        CreateEditComponent,
        AuthorsSearchComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument(),
        LoginPageModule,
        ReactiveFormsModule,
        HttpClientModule,
        SpinnerModule,
        SearchBarModule
    ],
    providers: [
        CoursesService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
