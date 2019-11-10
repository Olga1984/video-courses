import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserLoginComponent } from './components/userlogin/userlogin.component';
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

const appRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent,
    data: { breadcrumb: 'login' }
  },
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
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserLoginComponent,
    MainComponent,
    BreadcrumbsComponent,
    LogoComponent,
    SearchBarComponent,
    VideoListComponent,
    ListItemComponent,
    TopHeaderComponent,
    LoadMoreButtonComponent,
    BorderStyleDirective,
    DurationPipe,
    OrderByPipe,
    FindCoursePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
