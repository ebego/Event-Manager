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
  // pagedEvents: Event[] = [];
  // currentPage = 1;
  // pageSize = 10;
  // totalPages = 0;

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
  //
  // ngOnInit(): void {
  //   this.getEvents();
  // }
  //
  // getEvents(): void {
  //   this.pageService.getEvents(this.currentPage, this.pageSize)
  //     .subscribe(data => {
  //       this.events = data.content;
  //       this.totalPages = data.totalPages;
  //       this.updatePagedEvents();
  //     });
  // }
  //
  // updatePagedEvents(): void {
  //   const startIndex = (this.currentPage - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   this.pagedEvents = this.events.slice(startIndex, endIndex);
  // }
  //
  // nextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //     this.updatePagedEvents();
  //   }
  // }
  //
  // previousPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.updatePagedEvents();
  //   }
  // }
}
