import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() {}

  addUser(user: string) {
    this.users.subscribe((users: string[]) => {
      users.push(user);
    });
  }
}
