import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Mobile' },
    { id: 3, name: 'Tablet' },
    { id: 4, name: 'IoT' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToProduct(url: any, id: any) {
    this.router.navigate([url, id]);
  }
}
