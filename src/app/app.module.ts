import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './shared/search/search.component';
import { LatestEventsComponent } from './pages/home-page/latest-events/latest-events.component';
import { MostViewedComponent } from './pages/home-page/most-viewed/most-viewed.component';
import { ContactFormComponent } from './pages/contact-page/contact-form/contact-form.component';
import { RegisterFormComponent } from './pages/event-detail-page/register-form/register-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    EventsPageComponent,
    EventDetailPageComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LatestEventsComponent,
    MostViewedComponent,
    ContactFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
