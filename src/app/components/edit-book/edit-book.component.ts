import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  bookUpdateForm: FormGroup;
  bookId: any;

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.bookId = ActivatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetBook(this.bookId).subscribe((res) => {
      this.bookUpdateForm.setValue({
        name: res['name'],
        price: res['price'],
        description: res['description'],
      });
    });

    this.bookUpdateForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }

  ngOnInit() {}

  handleEditBook() {
    // console.log('book :', this.bookForm.get('name')?.value);
    if (this.bookUpdateForm.valid) {
      this.crudService.UpdateBook(this.bookId, this.bookUpdateForm.value);
    }
  }
}
