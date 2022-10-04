import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})

// component generant la liste des evenement 
export class EventListComponent implements OnInit {

  events$!: Observable<Event[]>;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    
    this.events$ = this.eventService.getAllEvents().pipe(map((res) => res.events));
  
  }

}
