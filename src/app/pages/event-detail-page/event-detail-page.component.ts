import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EventService} from "../../services/event/event.service";
import {Event} from "../../models/event.model";
import { ActivatedRoute } from '@angular/router';
import {environment} from "../../../environments/environment";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.css']

})
export class EventDetailPageComponent implements OnInit{
  event?: Event;
  env: any;
  constructor(private eventService: EventService,
              private modalService: NgbModal,
              private route: ActivatedRoute) {
}
  open(content:any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        // this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  ngOnInit() {
  //   this.env=environment;
  //   const id = + (this.route.snapshot.paramMap.get('id') || 0);
  //   this.eventService.getEventsById(id).subscribe({
  //     next: result => {
  //       this.event = result;
  //     },
  //     error: err => {
  //       console.error(err);
  //     }
  //   })
  // }
  //   const UUID = uuidv4();
    const UUID = this.route.snapshot.paramMap.get('UUID');
    const ID = UUID ? UUID.replace(/-/g, '') : ''; // Remove dashes from UUID to get the ID

    this.eventService.getEventsById(ID).subscribe({
      next: result => {
        this.event = result;
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
