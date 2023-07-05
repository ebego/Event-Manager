import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../../models/event.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient:HttpClient) {}

  getLatestEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(environment.apiBaseUrl + "/events/latest");
  }
  getMostViewedEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(environment.apiBaseUrl + "/events/most-viewed");
  }
  getAllEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(environment.apiBaseUrl + "/events");
  }
  getEventsById(id: number): Observable<Event[]> {
    return this.httpClient.get<Event[]>(environment.apiBaseUrl + `/events/${id}`);  }
  addEvent(event: Event): Observable<Event[]> {
    return this.httpClient.get<Event[]>(environment.apiBaseUrl + "/events/add");
  }
  searchEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(environment.apiBaseUrl + "/events/search");
  }

}
