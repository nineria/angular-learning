import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() updateDataEvent = new EventEmitter<string>();

  data: any = '';

  constructor() {}

  ngOnInit(): void {}
}
