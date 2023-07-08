import {Component, OnInit} from '@angular/core';
import {Event} from "../../models/event.model";
import {EventService} from "../../services/event/event.service";
import {environment} from "../../../environments/environment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {
  events: Event[] | any;
  env: any;
  query?: string

  newEvent: Event = {
    title: '',
    eventDate: '',
    description: '',
    banner: ''
  }

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query') || '';
    this.refreshList(this.query)
  }

  add(): void {
    // Upload data to server and update local table
    this.eventService.addEvent(this.newEvent)
      .subscribe(event => {
        this.events.push(event);
        this.newEvent = {
          title: '',
          eventDate: '',
          description: '',
          banner: ''
        }
      });
  }

  refreshList(query: string) {
    this.env = environment;
    this.eventService.getAllEvents(query).subscribe({
      next: result => {
        this.events = result;
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
