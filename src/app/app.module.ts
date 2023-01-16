import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewBookComponent } from './components/view-book/view-book.component';

@NgModule({
  declarations: [AppComponent, AddBookComponent, ViewBookComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ViewBookComponent,
      },
      {
        path: '/edit-book',
        component: EditComponent,
      },
      {
        path: '/add-book',
        component: AddBookComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
