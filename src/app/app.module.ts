import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBookComponent } from './components/add-book/add-book.component';

import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ViewBookComponent } from './components/view-book/view-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: EditComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
