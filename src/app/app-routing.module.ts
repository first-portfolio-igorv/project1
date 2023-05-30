import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { DiscountInfoComponent } from './pages/discount-info/discount-info.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AboutComponent } from './pages/about/about.component';
import { OffertaComponent } from './pages/offerta/offerta.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
import { ProductInfoResolver } from './shared/services/product/product-info.resolver';
import { DiscountInfoResolver } from './shared/services/discount/discount-info.resolver';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { AdminAuthDialogComponent } from './components/admin-auth-dialog/admin-auth-dialog.component';

import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { UserDataComponent } from './pages/cabinet/user-data/user-data.component';
import { ProductHistoryComponent } from './pages/cabinet/product-history/product-history.component';
import { AdminGuard } from './shared/guards/admin/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, 
  { path: 'home', component: HomeComponent },
  { path: 'adminAuth', component: AdminAuthDialogComponent },
  { path: 'action', component: DiscountComponent  },
  { path: 'action/:id', component: DiscountInfoComponent,
           resolve:{discountInfo: DiscountInfoResolver} },
           
  { path: 'product/:category', component: ProductComponent},
  { path: 'product/:category/:id', component: ProductInfoComponent,
           resolve: { productInfo: ProductInfoResolver }},

  { path: 'delivery', component: DeliveryComponent},
  { path: 'about', component: AboutComponent },
  { path: 'offerta', component: OffertaComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cabinet', component:CabinetComponent, canActivate:[AuthGuard],
  children:[
    { path: 'userData', component: UserDataComponent },
    { path: 'productHistory', component: ProductHistoryComponent },
    { path: '', pathMatch: 'full', redirectTo: 'userData' }
  ]
},
  { path: 'admin', component: AdminComponent,canActivate:[AdminGuard] ,
       children: [
    { path: 'category', component: AdminCategoryComponent},
    { path: 'product', component: AdminProductComponent },
    { path: 'order', component: AdminOrderComponent },
    { path: 'discount', component: AdminDiscountComponent },
    { path: '', pathMatch: 'full', redirectTo: 'category' }
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
