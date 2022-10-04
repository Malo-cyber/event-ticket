import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';


@Injectable({
  providedIn: 'root'
})

export class EventService {
    constructor(private http: HttpClient){}

  getAllEvents(): Observable<any> {
    return this.http.get<any>(`http://localhost:1080/getSort`);

  }
  getOneEventsById(concertId: number): Observable<Event> {
    return this.http.get<any>(`http://localhost:1080/getOne/${concertId}`);

  }

}