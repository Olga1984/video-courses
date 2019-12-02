import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { LoadMoreButtonComponent } from './components/load-more-button/load-more-button.component';
import { BorderStyleDirective } from './directives/border-style/border-style.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FindCoursePipe } from './pipes/find-course.pipe';
import { CoursesService } from './services/courses.service';
import { AuthorizationService } from './services/authorization.service';
import { UserLoginComponent } from './pages/userlogin/userlogin.component';
import { LoginPageModule } from './pages/login-page.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateEditComponent } from './components/create-edit/create-edit.component';

const appRoutes: Routes = [
    {
        path: 'logoff',
        component: UserLoginComponent,
        data: { breadcrumb: 'logoff' }
    },
    {
        path: 'courses',
        component: MainComponent,
        data: { breadcrumb: 'courses' }
    },
    {
        path: 'courses/:id',
        component: CreateEditComponent,
        data: { breadcrumb: 'courses/:id' }
    },
    {
        path: 'courses/new',
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
        SearchBarComponent,
        VideoListComponent,
        ListItemComponent,
        NotFoundComponent,
        TopHeaderComponent,
        LoadMoreButtonComponent,
        BorderStyleDirective,
        DurationPipe,
        OrderByPipe,
        FindCoursePipe,
        CreateEditComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        LoginPageModule,
        ReactiveFormsModule
    ],
    providers: [
        CoursesService,
        AuthorizationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
