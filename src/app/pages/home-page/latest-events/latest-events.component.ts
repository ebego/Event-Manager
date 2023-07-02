import {Component, OnInit} from '@angular/core';
import {Event} from "../../../models/event.model";
import {EventService} from "../../../services/event/event.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-latest-events',
  templateUrl: './latest-events.component.html',
  styleUrls: ['./latest-events.component.css']
})
export class LatestEventsComponent implements OnInit{
  events: Event[] | any;
  env: any;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.env = environment;
    this.eventService.getLatestEvents().subscribe({
      next: result => {
        this.events = result;
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
