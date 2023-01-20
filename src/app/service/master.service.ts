import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor() {}

  // Subject
  subjectStatus = new Subject<string>();
  // BehaviorSubject
  behaviorSubjectStatus = new BehaviorSubject<number>(0);
  // ReplaySubject
  replaySubject = new ReplaySubject<number>(3); // take 3 value from record

  statusInfo() {
    const deliveryStatus = new Observable((item) => {
      item.next('Created order(s)');

      setTimeout(() => {
        item.next('Order in progress');
      }, 2000);
      setTimeout(() => {
        item.next('Payment confirmed');
      }, 4000);
      setTimeout(() => {
        item.next('Out for delivery');
      }, 6000);
      setTimeout(() => {
        item.next('Delivered');
      }, 8000);
    });

    return deliveryStatus;
  }
}
