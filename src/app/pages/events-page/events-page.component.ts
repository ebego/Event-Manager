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
    banner: this.selectedFile?.name,
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

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log("ERDIT", event);
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  // onFileSelected(event: Event): void {
  //   const inputElement = event.banner as HTMLInputElement;
  //   if (inputElement.files && inputElement.files.length > 0) {
  //     this.selectedFile = inputElement.files[0];
  //   }
  // }
  //

  onUpload(): void {
    console.log("ERDIT", this.selectedFile);
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile)
        .then((response) => {
          console.log('Image uploaded successfully:', response);
          // Handle the response from the server as needed
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
        })
        .finally(() => {
          // Optionally, clear the file input after uploading
          this.clearFileInput();
        });
    }
  }


  add(): void {
    this.onUpload()

    //
    // const inputElement = this.fileInput as HTMLInputElement;
    // if (inputElement.files && inputElement.files.length > 0) {
    //   this.selectedFile = inputElement.files[0];
    // }
    // Upload data to server and update local table

    let newEvent1 = {
      title: this.newEvent.title,
      eventDate: this.newEvent.eventDate,
      description: this.newEvent.description,
      banner: this.selectedFile?.name,
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
          banner: ""
        }
      });

  }
  clearFileInput(): void {
    this.fileInput.nativeElement.value = '';
    this.selectedFile = null;
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
