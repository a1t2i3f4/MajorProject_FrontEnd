import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AdminComponent } from './component/admin/admin.component';
// import { UpdateproductComponent } from './component/updateproduct/updateproduct.component';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

>>>>>>> 81d8ec4a776d6d5822c603f2355741407097e28e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    // UpdateproductComponent
=======
    NavBarComponent
>>>>>>> 81d8ec4a776d6d5822c603f2355741407097e28e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
    
    
=======
    OrdersModule,
    SiteLayoutModule
>>>>>>> 81d8ec4a776d6d5822c603f2355741407097e28e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
