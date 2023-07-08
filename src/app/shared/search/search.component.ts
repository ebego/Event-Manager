import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from "../../models/event.model";
import {EventService} from "../../services/event/event.service";
import {environment} from "../../../environments/environment";
import {query} from "@angular/animations";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  events: Event[] | any;
  env: any;
  searchForm = this.formBuilder.group({
    query: '',
  });
  isSearching: boolean = false;

  @Input("query") query?: string;
  @Input("navigateToList") navigateToList?: boolean = false;
  @Output() onSearch : EventEmitter<string> = new EventEmitter();

  constructor(private eventService: EventService, private formBuilder: FormBuilder, private _router: Router) {
  }

  ngOnInit() {
    this.searchForm.setValue({query: this.query || ""});
    this.env = environment;
   /* this.eventService.searchEvents().subscribe({
      next: result => {
        this.events = result;
      },
      error: err => {
        console.error(err);
      }
    })*/
  }

  search(event: any) {
    this.isSearching = true
    if (!this.searchForm.value.query) {
      this.onSearch.emit("");
      return;
    }

    if(this.navigateToList)
      this._router.navigateByUrl("/events/" +  this.searchForm.value.query)
    this.isSearching = false;
    this.onSearch.emit(this.searchForm.value.query);
  }

  resetForm() {
    this.isSearching = false;
    this.searchForm.reset();
  }
}
