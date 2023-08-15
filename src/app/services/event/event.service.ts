import { Injectable, OnInit  } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../../models/event.model";
import {environment} from "../../../environments/environment";
import {AuthService} from "../../shared/auth-service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class EventService implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient:HttpClient, private http: HttpClient , private authService: AuthService) {}
  env: any;

  // uploadImage(imageFile: File): Promise<any> {
  //   const formData: FormData = new FormData();
  //   formData.append('image', imageFile, imageFile.name);
  //
  //   // Replace 'YOUR_IMAGE_UPLOAD_API_URL' with your backend API endpoint for image upload
  //   return this.http.post<any>('YOUR_IMAGE_UPLOAD_API_URL', formData).toPromise();
  // }

  ngOnInit(): void {
    // Include the token in the Authorization header
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.token}`
      })
    };
this.env = environment;
    // Make a GET request with the Authorization header
    this.http.get(`${environment.apiBaseUrl}/latest-events`, httpOptions)
      .subscribe(response => {
        // Handle response
      });
  }

  getLatestEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(environment.apiBaseUrl + "/events/latest");
  }
  getMostViewedEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(environment.apiBaseUrl + "/events/most-viewed");
  }
  getAllEvents(query?: string): Observable<Event[]> {
    return this.httpClient.get<Event[]>(environment.apiBaseUrl + "/events?query="+ query);
  }
  getEventsById(id?: string): Observable<Event> {
    return this.httpClient.get<Event>(environment.apiBaseUrl + `/events/${id}`);  }

  addEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(environment.apiBaseUrl + "/events/add" , event, this.httpOptions);
  }
  deleteEventsById(id?: string): Observable<Event> {
    return this.httpClient.delete<Event>(environment.apiBaseUrl + `/events/delete/${id}`);  }

}
