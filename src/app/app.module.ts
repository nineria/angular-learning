import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
<<<<<<< HEAD
import { EditComponent } from './components/edit/edit.component';
import { ViewBookComponent } from './components/view-book/view-book.component';

@NgModule({
  declarations: [AppComponent, AddBookComponent, ViewBookComponent],
=======
import { EditBookComponent } from './components/edit-book/edit-book.component';

@NgModule({
  declarations: [AppComponent, AddBookComponent],
>>>>>>> bf7d63374bffbc7a64023c9980290b48e0df3f1a
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
<<<<<<< HEAD
        component: ViewBookComponent,
      },
      {
        path: '/edit-book',
        component: EditComponent,
      },
      {
        path: '/add-book',
        component: AddBookComponent,
=======
        component: EditBookComponent,
>>>>>>> bf7d63374bffbc7a64023c9980290b48e0df3f1a
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
