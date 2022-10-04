import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient){}

  createUser(user : any): Observable<User> {
    return this.http.post<any>('http://localhost:1080/signup', user);
}
  createMultipleUser(users: User[]): Observable<User[]> {
    return this.http.post<any>('http://localhost:1080/multiplesignup', users);
  }

}