import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from './order/order.component';
import {LoginComponent} from './login/login.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {CustomerComponent} from './customer/customer.component';
import {ProductsEditComponent} from './products-edit/products-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductsComponent} from './products/products.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {SuppliersDeleteComponent} from './suppliers/suppliers-delete.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent
      },
      {
        path: ':id',
        component: ProductDeleteComponent
      },
      {
        path: 'edit/:product',
        component: ProductsEditComponent
      }
    ]
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
    children: [
      {
        path: ':id',
        component: SuppliersDeleteComponent
      }
    ]
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
