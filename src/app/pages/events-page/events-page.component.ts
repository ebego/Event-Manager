import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {EventService} from "../../services/event/event.service";
import {environment} from "../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {ImageUploadService} from "../../shared/image-upload-app/image-upload.service";
import {Event as Eventi} from "../../models/event.model";

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedFile: File | null = null;
  events: Eventi[] | any;
  env: any;
  query?: string
  // pagedEvents: Event[] = [];
  // currentPage = 1;
  // pageSize = 10;
  // totalPages = 0;

  newEvent: Eventi = {
    title: '',
    eventDate: '',
    description: '',
    banner: '',
    location: '',
    price: 0,
    maxBooking: 0
  }

  constructor(private eventService: EventService, private route: ActivatedRoute, private imageUploadService: ImageUploadService) {
  }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query') || '';
    this.refreshList(this.query)
  }

  add(): void {

    let newEvent1 = {
      title: this.newEvent.title,
      eventDate: this.newEvent.eventDate,
      description: this.newEvent.description,
      banner: this.newEvent.banner,
      location: this.newEvent.location,
      price: this.newEvent.price,
      maxBooking: this.newEvent.maxBooking
    }
    this.eventService.addEvent(newEvent1)
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

  deleteEvent(id: string): void {
    this.eventService.deleteEventsById(id).subscribe(
      () => {
        // After successful deletion, update the events list by filtering out the deleted event
        this.events = this.events.filter((event: Eventi) => event.id !== id);
        // Provide the Eventi type for the 'event' parameter in the filter function
      },
      error => {
        console.error('Error deleting event:', error);
        // Handle error here (e.g., show error message to the user)
      }
    );
  }

}
