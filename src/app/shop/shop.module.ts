import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ShopRoutingModule } from './shop-routing.module';
import { MeterComponent } from './meter/meter.component';
import { ActionBarComponent } from './action-bar/action-bar.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    OverviewComponent,
    DetailsComponent,
    MeterComponent,
    ActionBarComponent,
  ],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {}
