import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '../layout/layout.module';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';

@NgModule({
  declarations: [DeliveryComponent],
  imports: [CommonModule, DeliveryRoutingModule, LayoutModule],
})
export class DeliveryModule {}
