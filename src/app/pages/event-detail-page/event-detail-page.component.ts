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
    this.env = environment
    const id = this.route.snapshot.paramMap.get('id') || '';
    if (!id)
      console.error("Id is not valid: ", "No id in paramter")
    this.eventService.getEventsById(id).subscribe({
      next: result => {
        this.event = result;
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
