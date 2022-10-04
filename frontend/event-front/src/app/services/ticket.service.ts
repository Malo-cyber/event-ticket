import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, take, tap } from 'rxjs';
import { Event } from '../models/event.model';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class TicketService {

    user_id!: number;
    event_id!: number;
    status!: number;
    tickets: any[] = [];

    constructor(private http: HttpClient,
                private userService: UserService){}

  createTicket(user : any, event: Event): any {
    return this.userService.createUser(user).pipe(
        take(1),
        mergeMap((res:any) => {
          this.user_id = res.id_user;
          this.event_id = event.id;
          const ticket = {"concertId" : this.event_id, "userId" : this.user_id}
          return this.createTicketPost(ticket).pipe(
            map((res:any)=> res))
         })
      )
}

    createMultipleTicket(users: any, event :Event) : any {
        return this.userService.createMultipleUser(users).pipe(
            mergeMap((res:any) => {
                this.event_id = event.id;
                for(let i=0;i<res.users.length;i++){
                    this.tickets.push({"userId" : res.users[i].id, "concertId" : this.event_id});
                }
                return this.createMultipleTicketPost(this.tickets).pipe(
                    map((res:any)=> res))
               })
        )
    }


createTicketPost(ticket: any): any{
    return this.http.post<any>('http://localhost:1080/ticketCreate', ticket);
}
createMultipleTicketPost(tickets: any[]): any {
    
    return this.http.post<any>('http://localhost:1080/mutlipleticketCreate', tickets);
}

}