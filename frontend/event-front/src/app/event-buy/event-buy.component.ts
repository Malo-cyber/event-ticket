
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Observable,map, Subscription, tap, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';


@Component({
  selector: 'app-event-buy',
  templateUrl: './event-buy.component.html',
  styleUrls: ['./event-buy.component.scss']
})

/*Componenet pour la vue d'achat. charge un event-card, 
creer un formGroupArray pour la gestion de plusieurs participant et l'affiche en tant que form 
et en tant que checkout avant paiment pour reutiliser au mieux le composant et rendre ca dynamique*/

export class EventBuyComponent implements OnInit {

  ticketForm : FormGroup = this.formBuilder.group({
    event: null,
    participantForm : this.formBuilder.array([])
  });
  event$!: Observable<Event>;
  isBuy: boolean = false;


  constructor(private formBuilder: FormBuilder, 
              private route: ActivatedRoute, 
              private eventService: EventService) { }

  ngOnInit(): void {
    this.event$ = this.eventService.getOneEventsById(Number(this.route.snapshot.params['id'])).pipe(
      map((res:Event)=> {
        this.ticketForm.get('event')?.setValue(res);
        return res
      })
    );
  }
  ticketValidated(){
    this.isBuy = true;
    console.log(this.isBuy);
  }
}
