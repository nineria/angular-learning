import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    OverviewComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {}
