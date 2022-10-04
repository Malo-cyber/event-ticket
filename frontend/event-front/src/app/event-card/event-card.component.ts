import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})

// component d'affichage des evenements 
export class EventCardComponent {
  @Input() event!: Event;

  constructor(private router: Router) {}


  // button function : redirige vers la vue d'achat - eventBuy
  onContinue(event_id: number) {
    this.router.navigateByUrl(`ticket-buy/${event_id}`);
  }
}

