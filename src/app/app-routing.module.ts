import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {EventsPageComponent} from "./pages/events-page/events-page.component";
import {EventDetailPageComponent} from "./pages/event-detail-page/event-detail-page.component";
import {ContactFormComponent} from "./pages/contact-page/contact-form/contact-form.component";
import {RegisterFormComponent} from "./pages/event-detail-page/register-form/register-form.component";
import {LoginFormComponent} from "./shared/login-form/login-form.component";
import {SignupFormComponent} from "./shared/signup-form/signup-form.component";
import {LoginComponent} from "./shared/auth-service/login.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'contacts', component: ContactPageComponent},
  {path: 'events', component: EventsPageComponent},
  {path: 'events/:query', component: EventsPageComponent},
  {path: 'event-detail/:id', component: EventDetailPageComponent},
  {path: 'form', component: ContactFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path:'login-form', component:LoginFormComponent},
  {path:'signup-form', component: SignupFormComponent},
  { path: 'login', component: LoginComponent },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

