import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  name: any = null;
  price: number = 0;
  description: string = '';

  constructor(private crudService: CrudService) {}

  ngOnInit() {}

  handleAddBook() {
    this.crudService.AddBook({
      _id: '1',
      name: 'teera',
      price: '20',
      description: 'haha',
    });
  }
}
