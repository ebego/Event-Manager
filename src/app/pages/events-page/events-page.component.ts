import {Component, OnInit} from '@angular/core';
import {Event} from "../../models/event.model";
import {EventService} from "../../services/event/event.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit{
  events: Event[] | any;
  env: any;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.env = environment;
    this.eventService.getAllEvents().subscribe({
      next: result => {
        this.events = result;
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
