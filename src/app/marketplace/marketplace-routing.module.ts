import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBookComponent } from './details/detailBook.component';
import { GetIdBookComponent } from './getIdBook/getIdBook.component';
import { MarketplaceComponent } from './marketplace.component';

const routes: Routes = [
  { path: '', component: MarketplaceComponent },
  {
    path: ':id',
    component: DetailBookComponent,
    children: [{ path: 'getid', component: GetIdBookComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class marketplaceModuleRoutingModule {}
