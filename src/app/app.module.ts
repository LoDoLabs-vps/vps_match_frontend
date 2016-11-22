import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DashboardHomeComponent } from '../components/dashboard-home/dashboard-home.component';
import { RegisterComponent } from '../components/register/register.component';
import { LandingPageHomeComponent } from '../components/landing-page-home/landing-page-home.component';
import { LandingPageSearchComponent } from '../components/landing-page-search/landing-page-search.component';

const appRoutes: Routes = [
  { path: "", component: LandingPageComponent, children: 
    [
      { path: "", component: LandingPageHomeComponent },
      { path: "login", component: LoginComponent },
      { path: "search", component: LandingPageSearchComponent }
    ]
  },
  { path: "login", component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    DashboardComponent,
    DashboardHomeComponent,
    RegisterComponent,
    LandingPageHomeComponent,
    LandingPageSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
