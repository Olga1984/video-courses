import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: UserloginComponent,
    data: { breadcrumb: 'login' }
  },
  {
    path: 'logoff',
    component: UserloginComponent,
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
    UserloginComponent,
    MainComponent,
    BreadcrumbsComponent,
    LogoComponent,
    SearchBarComponent,
    VideoListComponent,
    ListItemComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
