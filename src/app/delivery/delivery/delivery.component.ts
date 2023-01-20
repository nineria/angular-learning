import { Component } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent {
  observableStatus: any;
  subjectStatus: any;
  behaviorSubjectStatus: any;
  replaySubjectStatus: any;
  replaySubjectStatusGetReplayValue: any;
  constructor(private service: MasterService) {
    // Observable
    this.service
      .statusInfo()
      .subscribe((item) => console.log((this.observableStatus = item)));

    // --- normal subject ---
    this.service.subjectStatus.subscribe((n) => (this.subjectStatus = n));

    setTimeout(() => {
      this.service.subjectStatus.next(25);
    }, 2000);
    setTimeout(() => {
      this.service.subjectStatus.next(75);
    }, 4000);

    // --- BehaviorSubject - have initial value ---
    this.service.behaviorSubjectStatus.subscribe(
      (n) => (this.behaviorSubjectStatus = n)
    );
    setTimeout(() => {
      this.service.behaviorSubjectStatus.next('Testing...');
    }, 2000);
    setTimeout(() => {
      this.service.behaviorSubjectStatus.next('Pass');
    }, 4000);

    // --- ReplaySubject ---
    this.service.replaySubject.subscribe((n) =>
      console.log('Replay Subject: ', n)
    );

    // set input
    this.service.replaySubject.next(5);
    this.service.replaySubject.next(4);
    this.service.replaySubject.next(3);
    this.service.replaySubject.next(2);
    this.service.replaySubject.next(1);

    // Other file
    this.service.replaySubject.subscribe((n) =>
      console.log('Get ReplaySubject: ', n)
    );
  }
}
