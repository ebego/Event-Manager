import {Component, OnInit} from '@angular/core';
import {Event} from "../../../models/event.model";
import {EventService} from "../../../services/event/event.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-most-viewed',
  templateUrl: './most-viewed.component.html',
  styleUrls: ['./most-viewed.component.css']
})
export class MostViewedComponent implements OnInit{
  events: Event[] | any;
  env: any;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.env = environment;
    this.eventService.getMostViewedEvents().subscribe({
      next: result => {
        this.events = result;
      },
      error: err => {
        console.error(err);
      }
    })
  }


}
