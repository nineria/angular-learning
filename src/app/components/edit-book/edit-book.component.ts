import { Component, Input, NgZone, OnInit, SimpleChanges } from '@angular/core';
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
  @Input() nameInput: string | undefined;
  @Input() priceInput: string | undefined;
  @Input() descriptionInput: string | undefined;

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

  // handleInputChange(newVal: string) {
  //   this.nameInput = newVal;
  //   console.log('input: ', this.nameInput);
  // }

  onSubmit() {
    console.log('book :', this.bookUpdateForm.get('name')?.value);
    if (this.bookUpdateForm.valid) {
      this.crudService
        .UpdateBook(this.bookId, this.bookUpdateForm.value)
        .subscribe((res) => {
          alert('Data Updated');
          this.ngZone.run(() => {
            this.router.navigateByUrl('/view-book');
          });
        });
    }
  }
}
