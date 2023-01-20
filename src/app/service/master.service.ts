import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor() {}

  // Subject
  subjectStatus = new Subject<number>();
  // BehaviorSubject
  behaviorSubjectStatus = new BehaviorSubject<string>('Not started');
  // ReplaySubject
  replaySubject = new ReplaySubject<number>(4); // take 3 value from record

  statusInfo() {
    const deliveryStatus = new Observable((item) => {
      item.next('Created');

      setTimeout(() => {
        item.next('Order processed');
      }, 2000);
      setTimeout(() => {
        item.next('Order confirmed');
      }, 4000);
      setTimeout(() => {
        item.next('Out of delivery');
      }, 6000);
      setTimeout(() => {
        item.next('Delivered');
      }, 8000);
    });

    return deliveryStatus;
  }
}
