import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from './order/order.component';
import {OrderListComponent} from './order-list/order-list.component';
import {LoginComponent} from './login/login.component';
import {ProductsListComponent} from './products-list/products-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {
}
