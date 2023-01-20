import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './service/authGuard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'delivery',
    pathMatch: 'full',
  },
  {
    path: 'delivery',
    loadChildren: () =>
      import('./delivery/delivery.module').then((m) => m.DeliveryModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'books',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'marketplace',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./marketplace/marketplace.module').then(
        (m) => m.marketplaceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
