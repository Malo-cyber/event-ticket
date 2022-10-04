import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms'
import { TicketService } from '../services/ticket.service';
import { map, tap } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.scss']
})

/*component qui vas appeler les services de creation de ticket a partir du checkoutFromGroup
*/
export class OrderCheckoutComponent implements OnInit {
  
  @Input()
  checkoutFormGroup! : FormGroup;

  @Output() 
  isBuy = new EventEmitter<boolean>();

  event : Event = new Event();

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    
    this.event.id = this.checkoutFormGroup.get('event')?.value.id;
    const participants = this.checkoutFormGroup.get('participantForm')?.value;
    

    if(participants.length == 1){
      this.ticketService.createTicket(participants[0], this.event).pipe(
        map((res:any) =>{
          console.log(res.msg);
          if(res.msg == 201){
            this.isBuy.emit(true);
          };
        })
      ).subscribe();
    }
    else{
      this.ticketService.createMultipleTicket(participants, this.event).pipe(
        tap((res:any) =>{
          console.log(res.msg)
          if(res.msg == 201){
            this.isBuy.emit(true);
          };
        })
      ).subscribe();
    }
  }


  
  

}
