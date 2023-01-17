import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent implements OnInit {
  @Input() step = 1;

  @Output() numberChange = new EventEmitter();
  counter = 0;

  constructor() {}

  ngOnInit(): void {}

  increase() {
    if (this.counter + this.step < 100) {
      this.counter = this.counter + this.step;
      this.numberChange.emit(this.counter);
    }
  }

  decrease() {
    if (this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
      this.numberChange.emit(this.counter);
    }
  }
}
