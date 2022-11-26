import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
