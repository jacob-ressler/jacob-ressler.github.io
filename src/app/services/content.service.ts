import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  initial: string = 'landing';
  active!: BehaviorSubject<string>;

  constructor() { 
    this.active = new BehaviorSubject(this.initial);
  }

  updateContent(next: string) {
    this.active.next(next);
  }

  
}
