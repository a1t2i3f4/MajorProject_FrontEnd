import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  {path: 'view-product', component: ViewProductComponent },
  {path: 'view-pview-product-by-category', component: ViewProductByCategoryComponent },
  {path: 'view-product-by-date', component: ViewProductByDateComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
