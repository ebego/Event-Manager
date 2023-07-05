import {Component, OnInit} from '@angular/core';
import {Event} from "../../models/event.model";
import {EventService} from "../../services/event/event.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  events: Event[] | any;
  env: any;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.env = environment;
    this.eventService.searchEvents().subscribe({
      next: result => {
        this.events = result;
      },
      error: err => {
        console.error(err);
      }
    })
  }

}
