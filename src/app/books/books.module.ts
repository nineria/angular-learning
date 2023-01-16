import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksRoutingModule } from './books-routing.module';
import { EditBookComponent } from './edit-book/edit-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewBookComponent } from './view-book/view-book.component';

@NgModule({
  declarations: [
    AddBookComponent,
    NavbarComponent,
    EditBookComponent,
    ViewBookComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, ReactiveFormsModule],
})
export class BooksModule {}
