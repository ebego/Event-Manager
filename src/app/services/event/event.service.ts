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
}
