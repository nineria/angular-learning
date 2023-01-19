import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-getId-book',
  templateUrl: './getIdBook.component.html',
})
export class GetIdBookComponent implements OnInit {
  @Input() id: Number | null | undefined;
  @Output() increaseVal = new EventEmitter<String>();
  constructor() {}

  ngOnInit(): void {}
}
