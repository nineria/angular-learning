import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css'],
})
export class MeterComponent implements OnInit {
  @Input() minLevel = 'Min Level';
  @Input() maxLevel = 'Max Level';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  doMinChange(value: number) {
    this.minChange.emit(value);
  }

  doMaxChange(value: number) {
    this.maxChange.emit(value);
  }
}
