import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cart', component: CartComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'admin-dash', component: AdminDashComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
