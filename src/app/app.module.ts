import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';



import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';

import { ProductComponent } from './pages/product/product.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { DiscountInfoComponent } from './pages/discount-info/discount-info.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AboutComponent } from './pages/about/about.component';
import { OffertaComponent } from './pages/offerta/offerta.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';


import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { SharedModule } from './shared/shared.module';
import { BasketDialogComponent } from './components/basket-dialog/basket-dialog.component';
import { UserDataComponent } from './pages/cabinet/user-data/user-data.component';
import { ProductHistoryComponent } from './pages/cabinet/product-history/product-history.component';
import { AdminAuthDialogComponent } from './components/admin-auth-dialog/admin-auth-dialog.component';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    AuthDialogComponent,
    HomeComponent,
    
    ProductComponent,
    ProductInfoComponent,
    DeliveryComponent,
    AboutComponent,
    OffertaComponent,
    CheckoutComponent,
    DiscountComponent,
    DiscountInfoComponent,
    
    AdminComponent,
    AdminCategoryComponent,
    AdminProductComponent,
    AdminOrderComponent,
    AdminDiscountComponent,

    CabinetComponent,
    BasketDialogComponent,
    UserDataComponent,
    ProductHistoryComponent,
    AdminAuthDialogComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideFirestore(()=>getFirestore()),
    provideAuth(()=>getAuth()),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
