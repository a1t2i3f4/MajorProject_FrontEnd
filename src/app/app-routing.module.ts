import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AdminComponent } from './component/admin/admin.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [

  {path: '', redirectTo: 'products',pathMatch:'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},

  {
    path:'login', component: ProductsComponent
  },

  {
    path:'adminlogin', component: AdminComponent
  }
  
=======
import { OrderListComponent } from './orders/order-list/order-list.component';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
{path:'order',component:OrderListComponent},
>>>>>>> 81d8ec4a776d6d5822c603f2355741407097e28e

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
