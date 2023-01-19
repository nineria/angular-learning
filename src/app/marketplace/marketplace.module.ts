import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailBookComponent } from './details/detailBook.component';
import { FilterBooksComponent } from './filterBooks/filterBooks.component';
import { GetIdBookComponent } from './getIdBook/getIdBook.component';
import { marketplaceModuleRoutingModule } from './marketplace-routing.module';
import { MarketplaceComponent } from './marketplace.component';

@NgModule({
  declarations: [
    FilterBooksComponent,
    MarketplaceComponent,
    DetailBookComponent,
    GetIdBookComponent,
  ],
  imports: [CommonModule, marketplaceModuleRoutingModule, ReactiveFormsModule],
})
export class marketplaceModule {}
