import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  @Input() nameBook = 'benz';
  @Input() price = 0;
  @Input() description = '';

  constructor() {}

  ngOnInit() {}
}
