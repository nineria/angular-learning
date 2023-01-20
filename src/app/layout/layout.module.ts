import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainComponent],
})
export class LayoutModule {}
