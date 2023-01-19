import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
export interface BookType {
  idBooks: Number | undefined;
  name: String | undefined;
}

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
})
export class MarketplaceComponent implements OnInit {
  books: BookType[];

  constructor(public router: Router, private ngZone: NgZone) {
    this.books = [
      {
        idBooks: 1,
        name: 'John',
      },
      {
        idBooks: 2,
        name: 'Benz',
      },
    ];
  }

  ngOnInit(): void {}

  handleBooks(id: Number | undefined) {
    this.router.navigateByUrl(`marketplace/${id}`);
  }
}
